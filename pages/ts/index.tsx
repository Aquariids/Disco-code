import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { withLayout } from "../../layout/Layout";
import MainMenuTs from "../../src/Components/Menu/MenuTs/MainMenuTs";
import { getAllPosts } from "../api/api";
import { POSTS_PATH_BASIC_TS } from "../api/paths";

export const getStaticProps: GetStaticProps = async () => {


  const posts_Basic_Ts = getAllPosts(POSTS_PATH_BASIC_TS).map((post) => post.meta);
  const AllThemePosts = { posts_Basic_Ts, };
  return {
    props: {
      AllThemePosts,
    },
  };
};

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
        <meta name="description" content={"Уроки по typescript, ts статьи,"} />
        <meta property="og:title" content="Уроки по typescript" />
        <meta
          property="og:description"
          content={"Уроки и разбор разных тем по javascript"}
        />
        <meta property="og:type" content={"article"} />
      </Head>

      <h1> Онлайн руководство по TypeScript </h1>

      <div className="page_body">
        <div className="page_menu">

          <p className="page__text">
            TypeScript - это по сути расширение javaScript. TypeScript позволяет нам писать типизированный код, так что, можно считать, что мы делаем из javaScript очень серьезного парня, с которым лучше не шутить
          </p>
          <div className="page__title">Содержание</div>
          <MainMenuTs />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);


