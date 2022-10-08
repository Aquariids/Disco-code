import type {NextPage } from 'next';
import React from 'react';
import { withLayout } from '../../../layout/Layout';



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






