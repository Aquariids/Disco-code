import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../../../../layout/Layout";
import { getAllPosts } from "../../../api/api";
import { POSTS_PATH_HTML } from "../../../api/paths";
import Head from "next/head";
import MainMenuHtmlCss from "../../../../src/Components/Menu/MenuHtml&css/MainMenuHtmlCss";
import Breadcrumbs from "../../../../src/Components/Breadcrumbs/Breadcrumbs";
import { mapHtmlCss } from "../../../../src/Components/Breadcrumbs/BreadcrumbsMap";
import { HTML_CSS } from "../../../api/pages";

export const getStaticProps: GetStaticProps = async () => {
  const posts_Html = getAllPosts(POSTS_PATH_HTML).map((post) => post.meta);

  const AllThemePosts = { posts_Html, };
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
          content={"Css, html, grid, html теги, элементы."}
        />
        <meta property="og:title" content="Руководсвто по html & css" />
        <meta
          property="og:description"
          content={"Краткое руководство по html и css."}
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
        <meta property="og:section" content="html, css" />
        <meta property="og:tag" content="html,css,grid" />
      </Head>

      <div className="page_body">
      <Breadcrumbs page={HTML_CSS} theme="Html & Css"  map={mapHtmlCss}/>

          <MainMenuHtmlCss />
        </div>
      </div>
  );
};

export default withLayout(Home);
