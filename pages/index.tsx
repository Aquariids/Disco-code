import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import React, { useRef } from "react";
import Articles from "../src/Components/Articles/Articles";
import s from "./index.module.scss";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const h2ref = useRef<number | any>(null);

  const scrollToMyRef = () => {
    const html = document.querySelector('html') as HTMLElement;
    html.style.scrollBehavior = 'smooth';
    window.scrollTo(0, h2ref.current.clientHeight + h2ref.current.offsetTop - h2ref.current.offsetHeight + 45);
    html.style.scrollBehavior = 'auto';
  };




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
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="DiscoCode - Пишу о javaScript и разных технологиях в программировании"
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
        <div className={s.welcomePage}>
          <div className={s.welcomePageTitle}>
            <div className={s.welcomePageTitle__items}>
              <h1>
                {" "}
                &lt;Disco <span className={s.welcomePageTitle__textcode}>Code/&gt;</span>{" "}
              </h1>
              <span className={s.welcomePageTitle__subtitle}> В серость под диско</span>
              <button onClick={scrollToMyRef} className={s.welcomePageTitle__btnScroll}> Перейти к урокам </button>

            </div>

          </div>
          <div className={s.aboutSite}>
            <div className={s.aboutSite__content}>
              <div className={s.aboutSite__paragraphAboutSite}>
                <div className={s.aboutSite__text}>
                  <div className={s.aboutSite__title}>О сайте</div>
                  Этот сайт является местом где я выкладываю все, что изучил, изучаю и
                  просто пишу о разных интересных мне технологиях в программировании.
                  Здесь будут выкладываться различные руководства и учебные материалы,
                  статьи и примеры.
                </div>
              </div>

              <div className={s.aboutSite__paragraphAboutMe}>
                <div className={s.aboutSite__text}>
                  <div className={s.aboutSite__title}>Всем привет</div>В данных мной материалах,
                  мои суждения и выводы могут быть ошибочны. Если вы где-то нашли ошибку или неточность, то буду рад вашим pull request запросам.
                  Под каждой страницей есть ссылка для редактирования ее на github.
                </div>
              </div>
            </div>


          </div>

        </div>

        <div className={s.news}>
          <span className={s.news__title}> <h3>Что нового</h3> </span>
          <div className={s.news__content}>
            <span className={s.news__item}>Добавлен новый раздел "Практика js" и добавил статью про <Link href={'js/practice-js/webpack'}>Webpack</Link><span className={s.news__date}>17.11.2022</span></span>
            <span className={s.news__item}>Написал о том как сделать <Link href={'js/practice-js/slider-js'}>классический слайдер на js</Link><span className={s.news__date}>19.11.2022</span></span>
            <span className={s.news__item}>Добавлена новая статья о том как работают <Link href={'web-request-response'}>web запросы и ответы</Link><span className={s.news__date}>30.11.2022</span></span>
            <span className={s.news__item}>Закончил писать про <Link href={'js/advanced-js/promise-fetch_api'}>fetch & promise</Link><span className={s.news__date}>02.12.2022</span></span>
            <span className={s.news__item}>Добавлен новый раздел "JavaScript под капотом" и первая статья о работе <Link href={'js/under-the-hood-js/engine'}>движка в javaScript & JRE</Link><span className={s.news__date}>7.12.2022</span></span>
          </div>
        </div>
        <div ref={h2ref} className={s.articles} >
          <Articles category="js" />
          <Articles category="other" />
        </div>

    </div>
  );
};

export default withLayout(Home);
