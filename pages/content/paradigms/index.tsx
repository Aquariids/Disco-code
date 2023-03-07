import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { withLayout } from "../../../layout/Layout";
import { getAllPosts } from "../../api/api";
import { POSTS_PATH_PARADIGMS_STYLE } from "../../api/paths";
import Head from "next/head";
import Link from "next/link";
import AnimationContainer from "../../../src/Components/AnimationContainers/AnimationContainer";
import Breadcrumbs from "../../../src/Components/Breadcrumbs/Breadcrumbs";

export const getStaticProps: GetStaticProps = async () => {
  const post_Style_Paradigms = getAllPosts(POSTS_PATH_PARADIGMS_STYLE).map((post) => post.meta);

  const AllThemePosts = {post_Style_Paradigms,};
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
      <Breadcrumbs />

      <h1 className="page__title_main"> Парадигмы программирования </h1>

        <div className="page_menu">
        <div className="page__title">Содержание</div>

        <AnimationContainer>
            <div className={"content_list"}>
              <ol>
                <li>
                  <Link href={"/content/paradigms/style"}> Стили написания </Link>
                </li>
              </ol>
            </div>
          </AnimationContainer>
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
