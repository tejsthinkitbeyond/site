import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ThinkITBeyond</title>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="IT consulting, Small business IT, Startup IT, Cloud computing, Software development, IT infrastructure, Digital transformation"
        />
        <meta name="author" content="ThinkITBeyond" />
        <meta
          name="description"
          content="ThinkITBeyond offers professional IT consulting services for small and medium businesses and startups. We specialize in providing customized IT solutions, including cybersecurity, cloud computing, software development, and IT infrastructure services. Our goal is to help businesses unlock their digital potential and achieve their goals with the latest technology. Contact us today to learn more about how we can help your business thrive in the digital age."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="manifest" href="~/manifest.json" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
