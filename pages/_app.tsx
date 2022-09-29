import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';




function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  
  return (
    <>
      <Head>
      <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property='og:url' content={`discocode.ru${router.asPath}`}/>
        <meta property='og:locale' content={'ru_RU'}/>
      </Head>
      <Component {...pageProps} key={router.pathname} /></>
  );
}

export default MyApp;

