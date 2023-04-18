import '@/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
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
