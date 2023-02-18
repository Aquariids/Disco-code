import type { NextPage } from "next";
import React from "react";
import { withLayout } from "../../../layout/Layout";
import Head from "next/head";
import Link from "next/link";
import AnimationContainer from "../../../src/Components/AnimationContainers/AnimationContainer";
import Breadcrumbs from "../../../src/Components/Breadcrumbs/Breadcrumbs";

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
        <Breadcrumbs />
        <h1 className="page__title_main"> Онлайн руководство по node.js </h1>

        <div className="page_menu">
          <div className="page__title">Содержание</div>

          <AnimationContainer>
            <div className={"content_list"}>
              <ol>
                <li>
                  <Link href={"/content/node-js/basic-node-js"}>
                    {" "}
                    Базовый node.js
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
