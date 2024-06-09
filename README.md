# Cake Bucket Website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and enhanced with several modern web technologies to deliver an efficient and feature-rich experience for users.

## Getting Started

First, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/wvikum/cake-bucket.git
cd cake-bucket

npm install

To start the development server, use:

nvm install 18.17.0
npm run dev

Open http://localhost:3000 with your browser to see the result. The page auto-updates as you edit files.


## Technologies Used

	•	Next.js: A React framework for server-side rendering, static site generation, and fast development.
	•	Tailwind CSS: A utility-first CSS framework for rapid UI development with custom styles.
	•	Mailjet: An email service provider used for sending emails from the website, such as order confirmations and contact forms.
	•	AWS Amplify: A set of tools and services that enable the front-end to connect with AWS services for authentication, storage, and API management.
	•	Mailboxlayer: An email validation API used to verify and validate email addresses to ensure they are deliverable.
	•	AWS Secrets Manager: Manages secrets such as API keys securely, which are retrieved dynamically in the application.

## File Structure

	•	app/page.tsx: The main page component where you can start editing the website. Auto-updates as you edit.
	•	/components: Contains reusable UI components.
	•	/styles: Global and component-level styles using Tailwind CSS.


## Deployment

We are using AWS Amplify for deployments.

Follow the AWS Amplify documentation to configure and deploy the application. For more details, refer to the AWS Amplify Documentation.
