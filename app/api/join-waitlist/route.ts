import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Insert email into Supabase
    const { error } = await supabase
      .from('waitlist_users')
      .insert([{ email }]);

    if (error) {
      // Check if it's a duplicate email error (code 23505 in Postgres)
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'You are already on the waitlist!' },
          { status: 200 } // Return 200 so the frontend shows success anyway
        );
      }
      console.error('Supabase Error:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // Send the Welcome Email
    const mailOptions = {
      from: `"Chop2Shape" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "You're on the list! 🚀 Quick question...",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #059669;">Welcome to Chop2Shape! 🥘💪</h2>
          <p>Hey there,</p>
          <p>You are officially on the waitlist. We are building Chop2Shape to prove that you don't need expensive gym memberships or crazy grocery lists to look good.</p>
          <p>We are mapping out custom workouts and meal plans based exactly on <strong>what is already in your kitchen right now</strong>.</p>
          
          <h3 style="color: #059669; margin-top: 30px;">I have one quick question for you:</h3>
          <p style="font-weight: bold; font-size: 16px; background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
            What is your biggest struggle with sticking to a fitness or diet routine right now?
          </p>
          
          <p>Hit reply and let us know. We read every single email, and your answer will literally help shape what we build first.</p>
          
          <p>Talk soon,</p>
          <p><strong>The Chop2Shape Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 