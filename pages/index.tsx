import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import React, { useEffect, useRef } from "react";
import s from "./index.module.scss";
import Head from "next/head";
import News from "../src/Components/News/News";
import Link from "next/link";

const Home: NextPage = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const h2ref = useRef<number | any>(null);

  const scrollToMyRef = () => {
    const html = document.querySelector('html') as HTMLElement;
    html.style.scrollBehavior = 'smooth';
    window.scrollTo(0, h2ref.current.clientHeight + h2ref.current.offsetTop - h2ref.current.offsetHeight + 50);
    html.style.scrollBehavior = 'none';
  };



  useEffect(()=> {

    let deferredPrompt;
  const addBtn = document.querySelector(".add-button");
  if(addBtn != null) {
    addBtn.style.display = "none";
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = "block";
    
      addBtn.addEventListener("click", (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = "none";
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          } else {
            console.log("User dismissed the A2HS prompt");
          }
          deferredPrompt = null;
        });
      });
    });
  }
    
  });


  return (
    <div className={s.page}>
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
      <div className={s.page__welcome}>
        <div className={s.page__welcome__title}>
          <div className={s.page__welcome__title__items}>
            <h1>
              {" "}
              &lt;Disco <span className={s.page__welcome__title__textcode}>Code/&gt;</span>{" "}
            </h1>
            <span className={s.page__welcome__title__subtitle}> В серость под диско</span>
            <Link href={"/content"}> <button className={s.page__welcome__title__btnScroll}>Перейти к урокам </button>  </Link>
            <button onClick={scrollToMyRef} className={s.page__welcome__title__btnScroll}>Новости </button>
          </div>

        </div>
        <div className={s.page__welcome__aboutSite}>
          <div className={s.page__welcome__aboutSite__content}>
            <div className={s.page__welcome__aboutSite__paragraphAboutSite}>
              <div className={s.page__welcome__aboutSite__text}>
                <div className={s.page__welcome__aboutSite__title}>О сайте</div>
                Этот сайт является местом где я выкладываю все, что изучил, изучаю и
                просто пишу о разных интересных мне технологиях в программировании.
                Здесь будут выкладываться различные руководства и учебные материалы,
                статьи и примеры.
              </div>
            </div>

            <div className={s.page__welcome__aboutSite__paragraphAboutMe}>
              <div className={s.page__welcome__aboutSite__text}>
                <div className={s.page__welcome__aboutSite__title}>Всем привет</div>В данных мной материалах,
                мои суждения и выводы могут быть ошибочны. Если вы где-то нашли ошибку или неточность, то буду рад вашим pull request запросам.
                Под каждой страницей есть ссылка для редактирования ее на github.
              </div>
            </div>
          </div>
        </div>
      </div>
    <div ref={h2ref}>
      <News />
      </div>
      <button className="add-button">Add to home screen</button>
    </div>
  );
};

export default withLayout(Home);
