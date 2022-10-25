import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { withLayout } from "../../layout/Layout";
import { getAllPosts } from "../api/api";
import { POSTS_PATH_TS } from "../api/paths";
import MenuTs from "../../src/Components/Menu/MenuTs/MenuTs";

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

      <h2>Содержание</h2>

      <div className="page_body">
        <div className={"page_menu"}>
          <MenuTs sideBarMenuActive={false} mobileMenuActive={false} />
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(POSTS_PATH_TS).map((post) => post.meta);

  return {
    props: {
      posts,
    },
  };
};
