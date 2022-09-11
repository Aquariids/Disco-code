import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { withLayout } from '../../../layout/Layout';
import { getAllPosts } from '../../api/api';
import { POSTS_PATH_JS } from '../../api/paths';



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
    <div>
      <h1 style={{fontSize:'50px'}}>Страница не найдена</h1>
      <p style={{fontSize:'25px', color:'gray'}}>Мы не смогли найти то, что вы искали.</p>
      <p>Пожалуйста, свяжитесь с владельцем сайта, с которого вы перешли по URL адресу, и дайте знать о сломанной ссылке.</p>
    </div>
  );
};


export default withLayout(Home);






