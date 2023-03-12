import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { withLayout } from "../../../../layout/Layout";
import Breadcrumbs from "../../../../src/Components/Breadcrumbs/Breadcrumbs";
import { mapTs } from "../../../../src/Components/Breadcrumbs/BreadcrumbsMap";
import MainMenuTs from "../../../../src/Components/Menu/MenuTs/MainMenuTs";
import { getAllPosts } from "../../../api/api";
import { TS } from "../../../api/pages";
import { POSTS_PATH_BASIC_TS } from "../../../api/paths";

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

    

      <div className="page_body">
      <Breadcrumbs map={mapTs} page={TS}  theme="TypeScript"/>
        <div className="page_menu">
          <MainMenuTs />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);


