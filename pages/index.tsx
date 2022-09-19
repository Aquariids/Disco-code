import type { NextPage } from 'next';
import { withLayout } from '../layout/Layout';
import React from 'react';
import Articles from '../src/Components/Articles';
import s from './index.module.css';
import Head from 'next/head';
const Home: NextPage = (): JSX.Element => {
  return (

    <div className={s.body}>

      <Head>
        <title>DiscoCode</title>
      </Head>
   
      <h1>  Disco <span className={s.code}>Code</span></h1>
      <p className={s.text}>Уроки и записи на самые разные темы!</p>

      <Articles />


    </div>
  );
};



export default withLayout(Home);
