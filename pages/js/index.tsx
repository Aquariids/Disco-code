import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import { getAllPosts } from '../api/api';
import { POSTS_PATH_JS } from '../api/paths';



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
      {/* {posts && posts.map(post => <div>{post.title}</div>)} */}
    </div>
  );
};


export default withLayout(Home);






