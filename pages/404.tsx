import Link from 'next/link';
import React from 'react';
import Button from '../src/Components/UI/Button/Button';




const Error404 = (): JSX.Element => {

  return (
    <>

    <div className='error404'>
      <div className='error404__body'>
      <h1>Страница не найдена</h1>
      <p>Мы не смогли найти то, что вы искали.</p>
      <span>Пожалуйста, свяжитесь с владельцем сайта, с которого вы перешли по URL адресу, и дайте знать о сломанной ссылке.</span>


      </div>

      <div className='error404__btn'>
    <Button  arrow='none'> <Link href={'/'}>Вернуться на главную страницу</Link> </Button>
    </div>
  </div>

  </>
  );
};


export default Error404;






