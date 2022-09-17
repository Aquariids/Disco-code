import '../styles/globals.css';
import "@code-hike/mdx/dist/index.css";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import NProgress from 'nprogress';
export function  Loading():any  {
  const router = useRouter();
  const [loading,setLoading] = useState(false);
 
  useEffect(() => {
      // const handleStart =  (url:string) =>   (url !== router.asPath) && setLoading(true);
      // const handleComplete =  (url:string) =>  (url === router.asPath) && setLoading(false);
      router.events.on('routeChangeStart',(url) => {
        NProgress.start();

        setTimeout(()=> {
          setLoading(true);

        },1000);



      });
      router.events.on('routeChangeComplete',(url) => {
        NProgress.done();
        setLoading(false);
      });
    
    return () => {
      router.events.off('routeChangeStart',(url) => {
        NProgress.start();

          setLoading(true);

      });
      router.events.off('routeChangeComplete',(url) => {
        setLoading(false);
      });
    };
  
  });

  return loading && (
<span className = {'loader'} >
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


