import Mailjet from "node-mailjet";
import { getSecretValue } from "./secretManager";

interface EmailResponse {
  success: boolean;
  error?: string;
}

const initializeMailjetClient = async () => {
  const apiKey =
    process.env.MAILJET_API_KEY || (await getSecretValue("mailjetApiKey"));
  const apiSecret =
    process.env.MAILJET_API_SECRET ||
    (await getSecretValue("mailjetApiSecret"));

  return new Mailjet({
    apiKey,
    apiSecret,
  });
};

const emailSender = async (
  subject: string,
  text: string
): Promise<EmailResponse> => {
  try {
    const mailjetClient = await initializeMailjetClient();

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

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: (error as Error).message };
  }
};

export default emailSender;
