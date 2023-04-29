import Head from 'next/head';

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <style global jsx>{`
        :root{
          --yellow:#E8D676;
          --black:#212427;
        }
        *{
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        body{
          font-family: 'Roboto Condensed', sans-serif;
        }
      `}</style>
      <Head>
        <title>Portfolio | Bruno Henrique</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}