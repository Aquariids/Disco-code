import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ym from 'react-yandex-metrika';
import {YMInitializer} from 'react-yandex-metrika';
import Router, { useRouter } from 'next/router';
Router.events.on('routeChangeComplete', (url:string)=> {
  if(typeof window !== 'undefined')
  ym('hit',url);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps({ res }:any) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  return {
    props: {},
  };
}

// export function reportWebVitals(metric: any) {
//   console.log(metric);
// }

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  
  return (
    <>
      <Head>
      <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
        <link rel='preconnect' href='https://mc.yandex.ru'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property='og:url' content={`discocode.ru${router.asPath}`}/>
        <meta property='og:locale' content={'ru_RU'}/>
      </Head>
      <YMInitializer
      accounts={[]}
      options={{webvisor:true,defer:true}}
      version = "2"
      />
      <Component {...pageProps} key={router.pathname} /></>
  );
}

export default MyApp;


