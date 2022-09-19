import '../styles/globals.css';
import "@code-hike/mdx/dist/index.css";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width; initial-scale=1" />
        <meta property='og:url' content={`discocode.ru${router.asPath}`}/>
        <meta property='og:locale' content={'ru_RU'}/>
      </Head>
      <Component {...pageProps} key={router.pathname} /></>
  );
}

export default MyApp;


