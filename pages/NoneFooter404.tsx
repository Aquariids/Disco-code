import Link from 'next/link';
import React from 'react';
import Button from '../src/Components/UI/Button/Button';




const NoneFooter404 = (): JSX.Element => {

  return (
    <>

    <div className='error404'>
      <div className='error404__body'>
      <h1>Страница не найдена</h1>
      <p>Мы не смогли найти то, что вы искали.</p>
      <span>Пожалуйста, свяжитесь с владельцем сайта, с которого вы перешли по URL адресу, и дайте знать о сломанной ссылке. Либо сайт умер, простите ( </span>
      </div>

  </div>

  </>
  );
};


export default NoneFooter404;






