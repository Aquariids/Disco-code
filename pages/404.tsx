import React from 'react';
import Footer from '../layout/Footer/Footer';
import Header from '../layout/Header/Header';



const Error404 = (): JSX.Element => {

  return (
    <>
    <Header/>
    <div className='error404'>
      <div className='body404'>
      <h1>Страница не найдена</h1>
      <p>Мы не смогли найти то, что вы искали.</p>
      <span>Пожалуйста, свяжитесь с владельцем сайта, с которого вы перешли по URL адресу, и дайте знать о сломанной ссылке.</span>


      </div>
  </div>
  <Footer/>

  </>
  );
};


export default Error404;






