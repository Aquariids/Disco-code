import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import MainMenuReact from '../../src/Components/Menu/MenuReact/MainMenuReact';
import { getAllPosts } from '../api/api';
import { POSTS_PATH_BASIC_REACT } from '../api/paths';

export const getStaticProps: GetStaticProps = async () => {

  const posts_Basic_React = getAllPosts(POSTS_PATH_BASIC_REACT).slice(0, 9).map(post => post.meta);

  const AllThemePosts = {posts_Basic_React};

  return {
    props: {
      AllThemePosts
    }
  };
};

const Home: NextPage = ({AllThemePosts}:any): JSX.Element => {

  return (
    <div className='page_content'>
      <Head>
        <title>Содержание</title>
        <meta name="google-site-verification" content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY" />

        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta name='description' content={'Уроки по react, reactjs, react статьи,'}/>
        <meta property='og:title' content='Уроки по react'/>
        <meta property='og:description' content={'Уроки и разбор разных тем по javascript'}/>
        <meta property='og:type' content={'article'}/>
      </Head>

      <h2>Содержание</h2>
      <div className='page_body'>
        <div className='page_menu'>
          <MainMenuReact MainPosts={AllThemePosts}/>
        </div>
      </div>
    </div>
  );
};





export default withLayout(Home);



