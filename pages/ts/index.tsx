import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import Menu from '../../src/Components/Menu/Menu';
import { getAllPosts } from '../api/api';
import { POSTS_PATH_TS } from '../api/paths';
import s from './tsmenu.module.css';


const Home: NextPage = (): JSX.Element => {

  return (
    <div className={s.index}>
    <Head>
      <title>Содержание</title>
    </Head>

        <h2>Содержание</h2>
        <span>Здесь собраны все мои записи по typeScript.</span> <br/>

    <div className={s.body}>
    <div className={s.menu}>

      <Menu title=" Работа с typeScript" category='basicts' page='ts'/>
      <Menu title=" А вдруг ошибки? " category='ts_err' page='ts'/>


    </div>
    </div>
    </div>
  );
};





export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {

  const posts = getAllPosts(POSTS_PATH_TS)
  .slice(0,9)
  .map(post => post.meta);

  return {
    props: {
      posts
    }
  };
};

