import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import { getAllPosts } from '../api/api';
import { POSTS_PATH_JS } from '../api/paths';




const Home: NextPage = (): JSX.Element => {

  return (
    <div>
    </div>
  );
};





export default withLayout(Home);

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

