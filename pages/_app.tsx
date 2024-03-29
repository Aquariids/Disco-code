/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'normalize.css/normalize.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined')
    ym('hit', url);
});


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {


  const router = useRouter();
  const r = router.asPath.split('/').length;
  // const [widthWindow,setWidthWindow] = useState<number>();

  // function telegramChat (width) { // это чисто по приколу

  //   const urlChat = 'https://widget.replain.cc/dist/client.js?id=3c7a4665-2ba9-4f82-9bd2-d3f54e2bbb6b';
  //   const chat = document.querySelector('#__replain_widget') as HTMLElement;
  //   const chat2 = document.querySelector('#__replain_widget_iframe ') as HTMLElement;

  //   const headers = document.querySelectorAll('script');
  //   function loadScript(src:string) { 
  //     const script = document.createElement('script'); 
  //     script.src = src; 
  //     script.async = true; 
  //     document.head.append(script); 

  // }
  // if(width >= 800) {
  //   loadScript(urlChat);

  //   if(chat) {
  //     chat.style.display = 'block';
  //     chat2.style.display = 'block';

  // }

  // }
  // else if(router.asPath === '/' && width <= 800) {
  //   loadScript(urlChat);

  //   if(chat) {
  //     chat.style.display = 'block';
  //     chat2.style.display = 'block';

  // }
  // }
  // else {    
  //   headers.forEach(item => {
  //     if(item.src == urlChat) {
  //       if(chat) {
  //         chat.style.display = 'none';
  //         chat2.style.display = 'none';

  //       }

  //       item.src = '';
  //       item.remove();
  //     } 

  //   }); 
  // }
  // }


  function smothScroll() { // да костыли, ну и что теперь поделать, да вот так вот
    const html = document.querySelector('html') as HTMLElement;

    if (r >= 3 && router.asPath.startsWith('/tests') != true) { // при переходе к темам с главной страници, мне не нужен плавный скролл
      html.style.scrollBehavior = 'smooth';
    }
    else if (router.asPath === '/web-request-response') {
      html.style.scrollBehavior = 'smooth';

    }
    else if (router.asPath === '/tests/beginner') {
      html.style.scrollBehavior = 'auto';
    }
    else {
      html.style.scrollBehavior = 'auto';
    }
  }
  useEffect(() => {
    // setWidthWindow(window.innerWidth);
    // telegramChat(widthWindow);
    smothScroll();
  });




  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel='preconnect' href='https://mc.yandex.ru' />
        <meta property='og:url' content={`discocode.ru${router.asPath}`} />
        <meta property='og:locale' content={'ru_RU'} />
      </Head>
      
      <YMInitializer
      
        accounts={[]}
        options={{ webvisor: false, defer: true }}
        version="2"
      />

      <Component {...pageProps} key={router.pathname} /></>
  );
};

export default MyApp;

