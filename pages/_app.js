import Head from 'next/head';
import 'styles/responsive.css';

export default function MyApp({Component, pageProps}) {
  return (
    <> 
      <Head>
        <title>Portfolio | Bruno Henrique</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}