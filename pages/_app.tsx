import '../styles/globals.css';
import "@code-hike/mdx/dist/index.css";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export function Loading():any {
  const router = useRouter();
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url:string) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url:string) => (url === router.asPath) && setTimeout(() => {setLoading(false);},5000);
    router.events.on('routeChangeStart',handleStart);
    router.events.on('routeChangeComplete',handleComplete);
    router.events.on('routeChangeError',handleComplete);


    return () => {
      router.events.off('routeChangeStart',handleStart);
      router.events.off('routeChangeComplete',handleComplete);
      router.events.off('routeChangeError',handleComplete);
  
    };
  });

  return loading && (
<span className="loader">
</span>
  );
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
const router = useRouter();
  return(
<>
  <Head>
  <meta name="viewport" content="width=device-width; initial-scale=1"/>
  </Head>

 <Component {...pageProps} key={router.pathname} />
</>

  );
}

export default MyApp;


