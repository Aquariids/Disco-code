import '../styles/globals.css';
import "@code-hike/mdx/dist/index.css";
import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
const router = useRouter();
  return(

  <Component {...pageProps} key={router.pathname} />


  );
}

export default MyApp;


