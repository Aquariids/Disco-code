
    
import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import { getAllPosts } from "../api/api";
import {POSTS_PATH_BASIC_DIMANLOX,POSTS_PATH_ADVANCED_DIMANLOX} from "../api/paths";
import Head from "next/head";
import MainMenuDimanLox from "../../src/Components/Menu/MenuDimanLox/MainMenuDimanLox";

export const getStaticProps: GetStaticProps = async () => {
  
        const posts_Basic_Diman_Lox = getAllPosts(POSTS_PATH_BASIC_DIMANLOX).map((post) => post.meta);
        
        const posts_Advanced_Diman_Lox = getAllPosts(POSTS_PATH_ADVANCED_DIMANLOX).map((post) => post.meta);
        

  const AllThemePosts = {posts_Basic_Diman_Lox,posts_Advanced_Diman_Lox};
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
            content={"DimanLox"}
          />
          <meta
            property="og:description"
            content={"Разбираемся в DimanLox"}
          />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discocode.ru/diman-lox" />
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru" />
        <meta property="og:author" content="Дмитрий черномашенцев" />
        <meta property="og:section" content="javaScript" />
        <meta property="og:tag" content="javaScript" />
      </Head>

      <div className="page_body">
      <h1> Онлайн руководство по Диману лоху </h1>

        <div className="page_menu">
        <p className="page__text">
        
Познакомимся с таким лохом как диман, потому что диман лох. аххахахха я тупа угараю отвечаю.


      </p>
        <div className="page__title">Содержание</div>
        <MainMenuDimanLox />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);

    
    
    
    