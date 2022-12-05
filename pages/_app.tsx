/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ym from 'react-yandex-metrika';
import {YMInitializer} from 'react-yandex-metrika';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
Router.events.on('routeChangeComplete', (url:string)=> {
  if(typeof window !== 'undefined')
  ym('hit',url);
});




function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const r = router.asPath.split('/').length;
  useEffect(()=> {
    if(r >= 3) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.querySelector('html')!.style.scrollBehavior = 'smooth';
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.querySelector('html')!.style.scrollBehavior = 'auto';

    }
  });
  

  useEffect(()=> {
    const chat = document.querySelector('#telegram_feedback_root') && document.querySelector('#telegram_feedback_root') as HTMLElement;
    const headers = document.querySelectorAll('script');
    function loadScript(src:string) { // создаем функцию для подгрузки скриптов.
      const script = document.createElement('script'); 
      script.src = src; 
      script.async = false; 
      document.head.append(script); 
  }
  if(router.asPath === '/') {
    loadScript('https://app.telegram-feedback.com/chat.js?wid=44bc091c-5f0b-4b85-9f1b-b239e8950da1');
    if(chat) {
      chat.style.display = 'block';
    }
  } else {    
    headers.forEach(item => {
      if(item.src == 'https://app.telegram-feedback.com/chat.js?wid=44bc091c-5f0b-4b85-9f1b-b239e8950da1') {
        if(chat != null) {
          chat.style.display = 'none';
        }
        item.src = '';
      } 
      
    });

    
  }

  });

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

