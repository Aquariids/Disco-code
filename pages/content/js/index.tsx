import type { NextPage } from "next";
import React from "react";
import { withLayout } from "../../../layout/Layout";
import Head from "next/head";
import Link from "next/link";
import s from "./pageJs.module.scss";
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
          content={"Онлайн руководство по JavaScript"}
        />
        <meta property="og:title" content="Уроки по javascript" />
        <meta
          property="og:description"
          content={"Онлайн руководство по javascript"}
        />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://discocode.ru/js" />
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
        <UrlNav/>
        <h1 className="page__title_main"> Онлайн руководство по JavaScript</h1>

        <div className="page_menu">
          {/* <p className="page__text">
            Здесь мы узнаем о базовом javaScript, так же посмотрим на продвинутый материал. Немного взглянем на алгоритмы, займемся практикой и поговорим о том, что из себя представляет javaScript внутри. 
          </p> */}
          <div className="page__title">Содержание</div>
          <AnimationContainer>
            <div className={"content_list"}>
              <ol>
                <li>
                  <Link href={"/content/js/basic-js"}> Базовый javascript</Link>
                </li>

                <li>
                  <Link href={"/content/js/advanced-js"}>
                    Продвинутый javaScript
                  </Link>
                </li>
                <li>
                  <Link href={"/content/js/algorithms-js"}> Алгоритмы</Link>{" "}
                </li>

                <li>
                  {" "}
                  <Link href={"/content/js/practice-js"}>
                    {" "}
                    Практика & webpack
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link href={"/content/js/under-the-hood-js"}>
                    {" "}
                    JavaScript под капотом
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link href={"/content/js/interview-js"}>
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
