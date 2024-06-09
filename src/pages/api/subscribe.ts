import type { NextApiRequest, NextApiResponse } from "next";
import emailSender from "../../utils/emailSender";

// In-memory storage for subscribed emails (temporary)
const subscribedEmails: Set<string> = new Set();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Validate email field
    if (!email) {
      res.status(400).json({ error: "Please type your email." });
      return;
    }

    if (subscribedEmails.has(email)) {
      res.status(400).json({ error: "You have already subscribed." });
      return;
    }

    subscribedEmails.add(email);

    const subject = `New Subscription Request`;
    const text = `You have a new subscription request from:\n\nEmail: ${email}\nSubscribed on: ${new Date().toLocaleString()}`;

    const result = await emailSender(subject, text, email);

    if (result.success) {
      res
        .status(200)
        .json({ message: "Subscription email sent successfully!" });
    } else {
      res.status(500).json({
        error: "Failed to send subscription email",
        details: result.error,
      });
    }
  } else {
    res.status(405).json({ error: "Something went wrong..!" });
  }
}
