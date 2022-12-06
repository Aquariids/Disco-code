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


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  const r = router.asPath.split('/').length;

  function telegramChat () {
    const chat = document.querySelector('#__replain_widget') as HTMLElement;
    const headers = document.querySelectorAll('script');
    function loadScript(src:string) { 
      const script = document.createElement('script'); 
      script.src = src; 
      script.async = true; 
      document.head.append(script); 
  }
  if(router.asPath === '/') {
    loadScript('https://widget.replain.cc/dist/client.js?id=3c7a4665-2ba9-4f82-9bd2-d3f54e2bbb6b');
    if(chat) chat.style.display = 'block';
  } else {    
    headers.forEach(item => {
      if(item.src == 'https://widget.replain.cc/dist/client.js?id=3c7a4665-2ba9-4f82-9bd2-d3f54e2bbb6b') {
        if(chat != null) chat.style.display = 'none';
        item.src = '';
        item.remove();
      } 
      
    }); 
  }
  }

  useEffect(()=> {
    telegramChat();

    if(r >= 3) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.querySelector('html')!.style.scrollBehavior = 'smooth';
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.querySelector('html')!.style.scrollBehavior = 'auto';
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

