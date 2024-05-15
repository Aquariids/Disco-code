import 'normalize.css/normalize.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import dynamic from 'next/dynamic';
const SandpackComponent = dynamic(() => import('../src/Components/SandpackComponent/SandpackComponent'), { ssr: false });
Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined') ym('hit', url);
});

const components = {
  SandpackComponent,
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  const r = router.asPath.split('/').length;

  function smothScroll() {
    const html = document.querySelector('html') as HTMLElement;
    if (r >= 3 && !router.asPath.startsWith('/tests')) {
      html.style.scrollBehavior = 'smooth';
    } else if (router.asPath === '/web-request-response' || router.asPath === '/tests/beginner') {
      html.style.scrollBehavior = 'auto';
    } else {
      html.style.scrollBehavior = 'auto';
    }
  }

  useEffect(() => {
    smothScroll();
  }, [router.asPath]);

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

      <MDXProvider components={components}>
        <Component {...pageProps} key={router.pathname} />
      </MDXProvider>
    </>
  );
};

export default MyApp;
