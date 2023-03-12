import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../../../../layout/Layout";
import { getAllPosts } from "../../../api/api";
import { POSTS_PATH_ADVANCED_JS, POSTS_PATH_BASIC_JS } from "../../../api/paths";
import Head from "next/head";
import MainMenuJs from "../../../../src/Components/Menu/MenuJs/MainMenuJs";
import Breadcrumbs from "../../../../src/Components/Breadcrumbs/Breadcrumbs";
import { mapJs } from "../../../../src/Components/Breadcrumbs/BreadcrumbsMap";
import { JS } from "../../../api/pages";

export const getStaticProps: GetStaticProps = async () => {
  const posts_Basic_Js = getAllPosts(POSTS_PATH_BASIC_JS).map((post) => post.meta);
  const posts_Advanced_Js = getAllPosts(POSTS_PATH_ADVANCED_JS).map((post) => post.meta);

 

  
  const AllThemePosts = {posts_Basic_Js,posts_Advanced_Js};    
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
          content={"Базовый javaScript"}
        />
        <meta property="og:title" content="Уроки по javaScript" />
        <meta
          property="og:description"
          content={"Базовый javaScript"}
        />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discocode.ru/js/basic-js" />
        <meta
          property="og:image"
          content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seancdavis.com%2Fposts%2Frun-loop-n-times-javascript%2F&psig=AOvVaw3_1bJy-ASlokQV8SIxMjzi&ust=1665134220667000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKi09r-iy_oCFQAAAAAdAAAAABAI"
        />
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru" />

        <meta property="og:author" content="Дмитрий черномашенцев" />
        <meta property="og:section" content="JavaScript" />
        <meta property="og:tag" content="JavaScript, js" />
      </Head>

    

      <div className="page_body">
      <Breadcrumbs page={JS} theme="JavaScript" map={mapJs}/>
    
        <div className="page_menu">
          <MainMenuJs />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
