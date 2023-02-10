import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { withLayout } from "../../../layout/Layout";
import AnimationContainer from "../../../src/Components/AnimationContainers/AnimationContainer";
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
          content={"Уроки по react, reactjs, react статьи,"}
        />
        <meta property="og:title" content="Уроки по react" />
        <meta
          property="og:description"
          content={"Уроки и разбор разных тем по javascript"}
        />
        <meta property="og:type" content={"article"} />
      </Head>

      <div className="page_body">
      <UrlNav/>

        <h1 className="page__title_main"> Онлайн руководство по React </h1>
        <div className="page_menu">
          <div className="page__title">Содержание</div>
          <AnimationContainer>
            <div className={"content_list"}>
              <ol>
                <li>
                  <Link href={"/content/react/basic-react"}>
                    {" "}
                    Базовый React
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href={"/content/react/interview-react"}>
                    {" "}
                    Собеседование
                  </Link>{" "}
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
