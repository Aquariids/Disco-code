import type { NextPage } from 'next';
import { withLayout } from '../layout/Layout';
import React from 'react';
import Articles from '../src/Components/Articles';
import s from './index.module.css'
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
const Home: NextPage = (): JSX.Element => {
  const router = useRouter();
  return (

    <div className={s.body}>

      <Head>
        <title>DiscoCode</title>
      </Head>

      <h1>  DiscoCode
        <span>Уроки и записи на самые разные темы!</span> </h1>

      <Articles />


    </div>
  );
};



export default withLayout(Home);
