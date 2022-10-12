import type { NextPage } from 'next';
import React from 'react';
import { withLayout } from '../../layout/Layout';




const Home: NextPage = (): JSX.Element => {

  return (
    <div>
    
      <h1 style={{fontSize:'50px'}}>Кисик, ой, как ты сюда попал??</h1>
      <p style={{fontSize:'25px', color:'gray'}}>Иди ко мне</p>
      <p>ой какой ты хороший мммм</p>
    </div>
  );
};


export default withLayout(Home);






