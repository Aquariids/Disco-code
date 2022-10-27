import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import React, { useRef } from "react";
import Articles from "../src/Components/Articles";
import s from "./index.module.css";
import Head from "next/head";
const Home: NextPage = (): JSX.Element => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const h2ref = useRef<number | any>(null);

  const scrollToMyRef = () => {window.scrollTo(0, h2ref.current.clientHeight + h2ref.current.offsetTop  - h2ref.current.offsetHeight - 50  );};

console.log(h2ref);


  return (
    <div className={s.body}>
      <Head>
        <title>
          DiscoCode - уроки по javascript, typescript, react, nextjs
        </title>
        <meta
          name="google-site-verification"
          content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
        />
        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta
          name="description"
          content="Здесь вы можете найти статьи на  разные темы по javaScript, typeScript, reactjs, nextjs"
        />
        <meta
          property="og:title"
          content="Добро пожаловать в серость под диско. Документация на понятном языке.  "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="DiscoCode - Пишем о javaScript и разных технологиях в программировании"
        />
        <meta
          property="og:description"
          content="Здесь вы можете найти статьи на разные темы по javaScript, typeScript, reactjs, nextjs и многому другому."
        />
        <meta property="og:url" content="https://discocode.ru/" />
        <meta
          property="og:image"
          content="https://github.com/Aquariids/Disco-code/blob/main/public/discoMeta.png?raw=true"
        />
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru"></meta>
      </Head>
      <div className={s.container}>
    <div className={s.titlePage}>
      <div className={s.index_meta_content}>
      <div className={s.logoTitle}>
        <h1>
          {" "}
          &lt;Disco <span className={s.code}>Code/&gt;</span>{" "}
        </h1>
        <span className={s.subtitle}> В серость под диско</span>
        <button onClick={scrollToMyRef} className={s.btnScroll}> Перейти к урокам </button>

      </div>

      </div>
         <div  className={s.menu}>
          <div className={s.allText}>
        <div className={s.bgText2}>
        <div   className={s.text}>
          <div  className={s.title}>О сайте</div>
          Этот сайт является местом где я выкладываю все, что изучил, изучаю и
          просто пишу о разных интересных мне технологиях в программировании.
          Здесь будут выкладываться различные руководства и учебные материалы,
          статьи и примеры.
        </div>
        </div>

        <div className={s.text}>
          <div className={s.bgText}>
          <div className={s.title}>Всем привет</div>В данных мной материалах,
          мои суждения и выводы могут быть ошибочны. Я лишь начинающий свой путь
          в серости программирования маленький человек.
        </div>
        </div>
        </div>
        
      
        </div>
        
      </div>
    

      <div ref={h2ref} className={s.articles} >
        <Articles   />
        </div>

        </div>
    </div>
  );
};

export default withLayout(Home);
