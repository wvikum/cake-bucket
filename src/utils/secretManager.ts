import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const region = process.env.AWS_REGION || "us-west-2";

const secretsManagerClient = new SecretsManagerClient({ region });

export const getSecretValue = async (secretName: string): Promise<string> => {
  try {
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const data = await secretsManagerClient.send(command);

    if (data.SecretString) {
      return data.SecretString;
    } else {
      throw new Error("SecretString not found in secret value");
    }
  } catch (err) {
    console.error(`Error retrieving secret ${secretName}:`, err);
    throw err;
  }
};
