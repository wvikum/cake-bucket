import Mailjet from "node-mailjet";

// const mailjetClient = new Mailjet({
//   apiKey: process.env.MAILJET_API_KEY!,
//   apiSecret: process.env.MAILJET_API_SECRET!,
// });

const mailjetClient = new Mailjet({
  apiKey: "9b9e91c56e35ce4138e54a4088da7176",
  apiSecret: "200644c4066f9ee3e2b4f0f054ff888a",
});
interface EmailResponse {
  success: boolean;
  error?: string;
}

const emailSender = async (
  subject: string,
  text: string
): Promise<EmailResponse> => {
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

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: (error as Error).message };
  }
};

export default emailSender;