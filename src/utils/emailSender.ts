import Mailjet from "node-mailjet";
import axios from "axios";

const mailjetClient = new Mailjet({
  apiKey: "9b9e91c56e35ce4138e54a4088da7176",
  apiSecret: "200644c4066f9ee3e2b4f0f054ff888a",
});

interface EmailResponse {
  success: boolean;
  error?: string;
}

// Email validation function using Mailboxlayer API
const validateEmail = async (email: string): Promise<boolean> => {
  try {
    const response = await axios.get("http://apilayer.net/api/check", {
      params: {
        access_key: "1d72be2f01d4916e59a5b354e5e7d82f",
        email,
      },
    });

    const isFormatValid = response.data.format_valid;
    const isSmtpCheckPassed = response.data.smtp_check;

    console.log("Mailboxlayer response:", response.data);

    // Log the specific parts of the response
    if (!isFormatValid) {
      console.error(`Email format is invalid for ${email}`);
    } else if (!isSmtpCheckPassed) {
      console.warn(`SMTP check failed for ${email}`);
    }

    // Return true only if format is valid
    return isFormatValid;
  } catch (error) {
    console.error("Email validation error:", error);
    return false;
  }
};

const emailSender = async (
  subject: string,
  text: string,
  sender: string
): Promise<EmailResponse> => {
  // Validate email before sending
  const isEmailValid = await validateEmail(sender);
  if (!isEmailValid) {
    return { success: false, error: `Invalid email address ${sender}` };
  }

  try {
    const request = await mailjetClient
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "swvikum1993@gmail.com",
              Name: "Cake Bucket Com",
            },
            To: [
              {
                Email: "cakebucketsl@gmail.com",
                Name: "Cake Bucket",
              },
            ],
            Subject: subject,
            TextPart: text,
          },
        ],
      });

    console.log("Mailjet response:", request.body);
    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: (error as Error).message };
  }
};

export default emailSender;