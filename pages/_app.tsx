import '../styles/globals.css';
import "@code-hike/mdx/dist/index.css";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
export function Loading(): any {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const handleStart =  (url:string) =>   (url !== router.asPath) && setLoading(true);
    // const handleComplete =  (url:string) =>  (url === router.asPath) && setLoading(false);
    router.events.on('routeChangeStart', (url) => {
      setTimeout(() => {
        NProgress.start();
        setLoading(true);
      }, 2000)



    });
    router.events.on('routeChangeComplete', (url) => {
      NProgress.done();
      setTimeout(() => {
        setLoading(false);
      }, 2500)
    });

  });

  return loading && (
    <>
      <span className={'loader'}> </span>
    </>

  );
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width; initial-scale=1" />
      </Head>

      <Component {...pageProps} key={router.pathname} /></>




  );
}

export default MyApp;


