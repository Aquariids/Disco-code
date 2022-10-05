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
        <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />
        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta name='description' content='Здесь вы можете найти статьи на  разные темы по javaScript, typeScript, reactjs, nextjs'/>
        <meta property='og:title' content='Здесь вы можете найти статьи и уроки на  разные темы по javaScript, typeScript, reactjs, nextjs' />
        <meta property='og:description' content='Здесь вы можете найти статьи на  разные темы по javaScript, typeScript, reactjs, nextjs' />
        <meta property='og:type' content='article' />
      </Head>
      <div className={s.menu}>
      <h1> &lt;Disco <span className={s.code}>Code/&gt;</span></h1>
      <div className={s.text}>
        <h4>О сайте</h4>
        Данный сайт является местом где я выкладываю все, что изучил, изучаю и просто пишу о разных технологиях программирования. Здесь будут выкладываться различные руководства и учебные материалы, статьи и примеры.<br/>
        </div>
      </div>

    <h3 className={s.titleBlock}> Выбирайте нужный блок и все</h3>
      <Articles />



    </div>
  );
};



export default withLayout(Home);
