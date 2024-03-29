import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../../../../layout/Layout";
import { getAllPosts } from "../../../api/api";
import { POSTS_PATH_BASIC_NODEJS } from "../../../api/paths";
import Head from "next/head";
import MainMenuNodeJs from "../../../../src/Components/Menu/MenuNodeJs/MainMenuNodeJs";
import Breadcrumbs from "../../../../src/Components/Breadcrumbs/Breadcrumbs";
import { mapNodeJs } from "../../../../src/Components/Breadcrumbs/BreadcrumbsMap";
import { NODE_JS } from "../../../api/pages";

export const getStaticProps: GetStaticProps = async () => {
  const posts_Basic_Node_Js = getAllPosts(POSTS_PATH_BASIC_NODEJS).map(
    (post) => post.meta
  );

  const AllThemePosts = { posts_Basic_Node_Js };
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
        <meta name="description" content={"Фундаментальный node js "} />
        <meta property="og:description" content={"Разбираемся в nodeJs"} />

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
        <meta property="og:tag" content="nodeJs, js, javaScript" />
      </Head>

      <div className="page_body">
      <Breadcrumbs page={NODE_JS} theme="Node.js" map={mapNodeJs}/>

        <div className="page_menu">
          <MainMenuNodeJs />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
