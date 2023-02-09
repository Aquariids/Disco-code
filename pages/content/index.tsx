import type { NextPage } from "next";
import { withLayout } from "../../layout/Layout";
import React from "react";
import s from "./index.module.scss";
import Articles from "../../src/Components/Articles/Articles";
import AnimationContainer from "../../src/Components/AnimationContainers/AnimationContainer";

const Home: NextPage = (): JSX.Element => {
 

 

  

  return (
    <div>
      {/* <Head>
        <title>
          DiscoCode - уроки по javascript, typescript, react, nextjs
        </title>
        <meta
          name="google-site-verification"
          content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
        />
        <meta name="yandex-verification" content="a99ae512e4f1c330" />
        <meta
          name="description"
          content="Здесь вы можете найти статьи на  разные темы по javaScript, typeScript, reactjs, nextjs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="DiscoCode - Пишу о javaScript и разных технологиях в программировании"
        />
        <meta
          property="og:description"
          content="Здесь вы можете найти статьи на разные темы по javaScript, typeScript, reactjs, nextjs и многому другому."
        />
        <meta property="og:url" content="https://discocode.ru/" />
        <meta
          property="og:image"
          content="https://github.com/Aquariids/Disco-code/blob/main/public/discoMeta.png?raw=true"
        />
        <meta property="og:site_name" content="DiscoCode" />
        <meta property="og:locale" content="ru_Ru"></meta>
      </Head> */}
  <AnimationContainer>
          <Articles category="js" />
          {/* <QuizCard  category="mainPage" src="/tests" text= "JavaScript тесты разных уровней." title={'JavaScript Тесты'} /> */}
          <Articles category="other" />
        </AnimationContainer>
    </div>

  );
};

export default withLayout(Home);
