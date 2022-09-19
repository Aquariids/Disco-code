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
        <title>DiscoCode - уроки по javascript, typescript, react, nextjs</title>
        <meta name='description' content={'Уроки по typescript,ts,уроки по javaScript,js, уроки по react,reactjs,next,next.js,nextjs статьи,'}/>
        <meta property='og:title' content='Уроки и разборы разных тем по  javascript, typescript, react, nextjs' />
        <meta property='og:description' content={'Уроки и разбор разных тем по javascript, typescript, react, nextjs'} />
        <meta property='og:type' content={'article'} />


      </Head>
      <h1>  Disco <span className={s.code}>Code</span></h1>
      <p className={s.text}>Уроки и записи на самые разные темы!</p>

      <Articles />


    </div>
  );
};



export default withLayout(Home);
