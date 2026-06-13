import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

// Load the sans-serif font (Inter) for body text and UI elements
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Load the serif font (Fraunces) for elegant editorial headlines
const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"], // Enables special typography features
});

// Viewport settings for mobile responsiveness and browser theme
export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents unwanted zooming when tapping inputs on iOS
};

// Rich SEO and Social Sharing Metadata
export const metadata: Metadata = {
  title: "Chop2Shape — Get fit with the food in your kitchen",
  description: "Personalized meal and workout plans built from the food you already have. No gym, no expensive groceries. Join the Chop2Shape waitlist.",
  keywords: ["fitness", "meal plan", "home workout", "Nigerian food", "weight loss", "budget fitness"],
  authors: [{ name: "Chop2Shape Team" }],
  openGraph: {
    title: "Chop2Shape — Get fit with the food in your kitchen",
    description: "Personalized meal and workout plans built from the food you already have. Join the waitlist.",
    url: "https://chop2shape.vercel.app",
    siteName: "Chop2Shape",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chop2Shape Waitlist Preview",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chop2Shape — Get fit with the food in your kitchen",
    description: "Personalized meal and workout plans built from the food you already have. Join the waitlist.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body 
        className="bg-[#FAF9F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#2D7A54]/20 selection:text-[#1A1A1A]"
      >
        {children}
      </body>
    </html>
  );
}