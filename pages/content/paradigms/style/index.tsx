import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../../../../layout/Layout";
import { getAllPosts } from "../../../api/api";
import { POSTS_PATH_PARADIGMS_STYLE } from "../../../api/paths";
import Head from "next/head";
import MainMenuParadigms from "../../../../src/Components/Menu/MenuParadigms/MainMenuParadigms";
import Breadcrumbs from "../../../../src/Components/Breadcrumbs/Breadcrumbs";
import { PARADIGMS } from "../../../api/pages";
import { mapParadigms } from "../../../../src/Components/Breadcrumbs/BreadcrumbsMap";

export const getStaticProps: GetStaticProps = async () => {
  const post_Style_Paradigms = getAllPosts(POSTS_PATH_PARADIGMS_STYLE).map((post) => post.meta);

  const AllThemePosts = { post_Style_Paradigms, };
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
        <meta
          name="description"
          content={"Функциональное программирование, ООП, стили написания кода."}
        />
        <meta property="og:title" content="Парадигмы программирования" />
        <meta
          property="og:description"
          content={"Функциональное программирование, ООП, стили написания кода."}
        />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discocode.ru/paradigms" />
        <meta
          property="og:image"
          content="/"
        />
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru" />

        <meta property="og:author" content="Дмитрий черномашенцев" />
        <meta property="og:section" content="Paradigms" />
        <meta property="og:tag" content="OOP, js, paradigms" />
      </Head>

      <div className="page_body">
      <Breadcrumbs  page={PARADIGMS} map={mapParadigms} theme={"Парадигмы программирования"}/>

        <div className="page_menu">

          <MainMenuParadigms />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
