export interface ExampleContent {
  label: string;
  value: string;
}

export const EXAMPLE_CONTENT: Record<"text" | "url" | "email", ExampleContent[]> = {
  text: [
    {
      label: "Gift card scam",
      value:
        "Hi Mom, I lost my phone and this is my new number. Can you send $500 to this Venmo right now? I'll explain later, please hurry and don't tell dad.",
    },
    {
      label: "Ordinary message",
      value: "Hey! Running about 10 minutes late for dinner, see you soon!",
    },
  ],
  url: [
    { label: "Suspicious link", value: "http://paypal-secure-verify-account.tk/login" },
    { label: "Trusted link", value: "https://www.wikipedia.org" },
  ],
  email: [
    {
      label: "Phishing email",
      value:
        "Subject: Urgent: Verify Your Account\n\nDear Customer,\n\nWe noticed unusual sign-in activity on your account. Verify your identity within 24 hours or it will be suspended.\n\nhttp://secure-bank0fverify.com/login?id=8231\n\nBank Security Team",
    },
    {
      label: "Ordinary email",
      value:
        "Subject: Your receipt from Acme Coffee Co.\n\nThanks for your order! Your total was $12.50, charged to the card ending in 4242. Order #48213.",
    },
  ],
};
