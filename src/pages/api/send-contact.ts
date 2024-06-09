import type { NextApiRequest, NextApiResponse } from "next";
import emailSender from "../../utils/emailSender";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const subject = `New Contact Form Submission from ${name}`;
    const text = `You have received a new message from the contact form on Cake Bucket:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    const result = await emailSender(subject, text, email);

    if (result.success) {
      res.status(200).json({ message: "Email sent successfully!" });
    } else {
      res
        .status(500)
        .json({ error: "Failed to send email", details: result.error });
    }
  } else {
    res.status(405).json({ error: "Something went wrong..!" });
  }
}
