import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import Menu from '../../src/Components/Menu/Menu';
import s from './jsmenu.module.css';
import { getAllPosts } from '../api/api';
import { POSTS_PATH_JS } from '../api/paths';
import Head from 'next/head';



export const getStaticProps: GetStaticProps = async () => {

  const posts = getAllPosts(POSTS_PATH_JS)
  .slice(0,9)
  .map(post => post.meta);

  return {
    props: {
      posts
    }
  };
};


const Home: NextPage = (): JSX.Element => {

  
  return (
  <div className={s.index}>
    <Head>
      <title>Содержание</title>
    </Head>

        <h2>Содержание</h2>
        <span>Здесь собраны все мои записи по JavaScript.</span> <br/>
        <span>Разборы базовых алгоритмов и даже немного задач</span>

    <div className={s.body}>
    <div className={s.menu}>
      
      <Menu title="Базовый JavaScript" category='basicjs'/>
      <Menu title="Продвинутый JavaScript" category='advancedjs'/>
    </div>
    </div>
    </div>
  );
};


export default withLayout(Home);






