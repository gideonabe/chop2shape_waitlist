import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Hr,
  Section,
  Row,
  Column,
} from "@react-email/components";

interface Props {
  email?: string;
}

export const WaitlistWelcomeEmail = ({ email }: Props) => (
  <Html lang="en" dir="ltr">
    <Head>
      <meta name="color-scheme" content="light" />
      <meta name="supported-color-schemes" content="light" />
    </Head>
    <Preview>Welcome to Chop2Shape — you're on the list.</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Logo / Wordmark */}
        <Section style={logoSection}>
          <Text style={wordmark}>Chop2Shape</Text>
        </Section>

        {/* Hero */}
        <Section style={heroSection}>
          <Heading as="h1" style={heading}>
            You're on the list.
          </Heading>
          <Text style={subhead}>
            Thanks for joining the Chop2Shape waitlist. We're building something
            special — personalized fitness built entirely around the food already
            in your kitchen.
          </Text>
        </Section>

        <Hr style={divider} />

        {/* The Question */}
        <Section style={questionSection}>
          <Text style={questionLabel}>We'd love to hear from you</Text>
          <Text style={questionBody}>
            What is your biggest struggle with sticking to a fitness or diet
            routine right now?
          </Text>
          <Text style={replyHint}>
            Just hit reply — your answer goes straight to our team.
          </Text>
        </Section>

        <Hr style={divider} />

        {/* What's next */}
        <Section style={nextSection}>
          <Text style={nextLabel}>What happens next?</Text>
          <Row style={bulletRow}>
            <Column style={bulletDot}>•</Column>
            <Column style={bulletText}>
              Early members get the first 3 months free — no card required.
            </Column>
          </Row>
          <Row style={bulletRow}>
            <Column style={bulletDot}>•</Column>
            <Column style={bulletText}>
              We'll email you the moment your early access spot opens.
            </Column>
          </Row>
          <Row style={bulletRow}>
            <Column style={bulletDot}>•</Column>
            <Column style={bulletText}>
              Your spot is reserved at the email address: {email}
            </Column>
          </Row>
        </Section>

        {/* Footer */}
        <Section style={footerSection}>
          <Text style={footerText}>
            Chop2Shape · Lagos, Nigeria
          </Text>
          <Text style={footerMuted}>
            You received this because you joined the Chop2Shape waitlist.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

/* ─── Styles ─── */

const main: React.CSSProperties = {
  backgroundColor: "#F8F7F3",
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  color: "#111111",
  margin: "0",
  padding: "0",
};

const container: React.CSSProperties = {
  maxWidth: "520px",
  margin: "0 auto",
  padding: "48px 32px",
};

const logoSection: React.CSSProperties = {
  marginBottom: "40px",
};

const wordmark: React.CSSProperties = {
  fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
  fontSize: "22px",
  fontWeight: 600,
  letterSpacing: "-0.02em",
  color: "#111111",
  margin: "0",
  lineHeight: 1.2,
};

const heroSection: React.CSSProperties = {
  marginBottom: "32px",
};

const heading: React.CSSProperties = {
  fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
  fontSize: "32px",
  fontWeight: 600,
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  color: "#111111",
  margin: "0 0 16px 0",
};

const subhead: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.6,
  color: "#4a4a44",
  margin: "0",
};

const divider: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid #E6E4DD",
  margin: "32px 0",
};

const questionSection: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "28px 24px",
  border: "1px solid #E6E4DD",
};

const questionLabel: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#2F855A",
  margin: "0 0 12px 0",
};

const questionBody: React.CSSProperties = {
  fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: 1.4,
  color: "#111111",
  margin: "0 0 16px 0",
};

const replyHint: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.5,
  color: "#6b6b63",
  margin: "0",
};

const nextSection: React.CSSProperties = {
  marginTop: "32px",
};

const nextLabel: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#111111",
  margin: "0 0 14px 0",
};

const bulletRow: React.CSSProperties = {
  marginBottom: "10px",
};

const bulletDot: React.CSSProperties = {
  width: "20px",
  fontSize: "14px",
  lineHeight: 1.5,
  color: "#2F855A",
  verticalAlign: "top",
};

const bulletText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.5,
  color: "#4a4a44",
};

const footerSection: React.CSSProperties = {
  marginTop: "40px",
};

const footerText: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#111111",
  margin: "0 0 4px 0",
};

const footerMuted: React.CSSProperties = {
  fontSize: "12px",
  color: "#9a9a90",
  margin: "0",
};