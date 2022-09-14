import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import Menu from '../../src/Components/Menu/Menu';
import { getAllPosts } from '../api/api';
import { POSTS_PATH_TS } from '../api/paths';
import s from './pageTs.module.css';


const Home: NextPage = (): JSX.Element => {

  return (
    <div className='page_content'>
    <Head>
      <title>Содержание</title>
    </Head>

        <h2>Содержание</h2>
        <span>Здесь собраны все мои записи по <code className={s.ts}>typeScript</code>.</span> <br/>

    <div className='page_body'>
    <div className='page_menu'>

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
  .map(post => post.meta);

  return {
    props: {
      posts
    }
  };
};

