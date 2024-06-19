import "../styles/globals.css";
import { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head"; // Import the Head component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cake Bucket</title>
        <link rel="icon" href="/logo/logo_1.jpg" />
        <meta
          name="description"
          content="The best cakes in town from Cake Bucket."
        />
        <meta
          name="keywords"
          content="cakes, bakery, Cake Bucket, delicious cakes"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;