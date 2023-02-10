import type {NextPage } from "next";
import React from "react";
import { withLayout } from "../../../layout/Layout";
import Head from "next/head";
import AnimationContainer from "../../../src/Components/AnimationContainers/AnimationContainer";
import Link from "next/link";
import UrlNav from "../../../src/Components/UI/UrlNav/UrlNav";

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
      <UrlNav />

        <h1 className="page__title_main"> Мини руководство по Html & Css </h1>

        <div className="page_menu">
          <div className="page__title">Содержание</div>
          <AnimationContainer>
            <div className={"content_list"}>
              <ol>
                <li>
                  <Link href={"/content/html-css/html"}>
                    {" "}
                    Html
                  </Link>
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
