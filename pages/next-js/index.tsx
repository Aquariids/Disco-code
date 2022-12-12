import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import { getAllPosts } from "../api/api";
import {POSTS_PATH_BASIC_NEXTJS } from "../api/paths";
import Head from "next/head";
import MainMenuNextJs from "../../src/Components/Menu/MenuNextJs/MainMenuNextJs";

export const getStaticProps: GetStaticProps = async () => {
  const posts_Basic_Next_Js = getAllPosts(POSTS_PATH_BASIC_NEXTJS).map((post) => post.meta);

  const AllThemePosts = {posts_Basic_Next_Js,};
  return {
    props: {
      AllThemePosts,
    },
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: NextPage = (): JSX.Element => {
  return (
    <div className="page_content">
      <Head>
        <title>Содержание</title>
        <meta
          name="google-site-verification"
          content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
        />

        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta
            name="description"
            content={"Основные темы в nextJs, маршрутизация, SSR, и многое другое."}
          />
          <meta
            property="og:description"
            content={"Разбираемся в nextJs"}
          />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discocode.ru/js" />
        {/* <meta
          property="og:image"
          content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seancdavis.com%2Fposts%2Frun-loop-n-times-javascript%2F&psig=AOvVaw3_1bJy-ASlokQV8SIxMjzi&ust=1665134220667000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKi09r-iy_oCFQAAAAAdAAAAABAI"
        /> */}
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru" />
        <meta property="og:author" content="Дмитрий черномашенцев" />
        <meta property="og:section" content="nextJS" />
        <meta property="og:tag" content="nextjS, js" />
      </Head>

      <div className="page_body">
      <h1> Онлайн руководство по NextJs </h1>

        <div className="page_menu">
        <p className="page__text">
        Познакомимся с таким javaScript фреймворком как next.js. Узнаем, что это за рендеринг такой SSR и SSG. Посмотрим как работают такие сайты как этот. Научимся получать данные на сервере, создавать удобные динамические маршруты и многому другому! 

      </p>
        <div className="page__title">Содержание</div>
        <MainMenuNextJs />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
