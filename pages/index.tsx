import type { NextPage } from 'next';
import { withLayout } from '../layout/Layout';
import React from 'react';
import Link from 'next/link';
import Articles from '../src/Components/Articles';




const Home: NextPage = (): JSX.Element => {

  return (
    <>
      <Articles/>
    </>
  );
};





export default withLayout(Home);

