import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ym from 'react-yandex-metrika';
import {YMInitializer} from 'react-yandex-metrika';
import Router, { useRouter } from 'next/router';
import ListMobileMenu from '../src/Components/mobileModalMenu/ListMobileMenu/ListMobileMenu';
Router.events.on('routeChangeComplete', (url:string)=> {
  if(typeof window !== 'undefined')
  ym('hit',url);
});



function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  
  return (
    <>
      <Head>
        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel='preconnect' href='https://mc.yandex.ru'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property='og:url' content={`discocode.ru${router.asPath}`}/>
        <meta property='og:locale' content={'ru_RU'}/>
      </Head>
      <YMInitializer
      accounts={[]}
      options={{webvisor:false,defer:true}}
      version = "2"
      />

      <Component {...pageProps} key={router.pathname} /></>
  );
}

export default MyApp;

