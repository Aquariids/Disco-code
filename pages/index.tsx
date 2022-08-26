import type { GetStaticProps, NextPage } from 'next';
import {getAllPosts, PostMeta} from '../src/api';
import { withLayout } from '../layout/Layout';
import React from 'react';




const Home: NextPage = (): JSX.Element => {

  return (
    <div>
    </div>
  );
};





export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {

  const posts = getAllPosts()
  .slice(0,9)
  .map(post => post.meta);

  return {
    props: {
      posts
    }
  };
};

