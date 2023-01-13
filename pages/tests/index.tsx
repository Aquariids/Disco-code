import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';
import AnimationContainer from '../../src/Components/AnimationContainers/AnimationContainer';
import QuizCard from '../../src/Components/QuizCard/QuizCard';
import s from './tests.module.scss';

const index = () => {
    return (
        <div className={s.main}>

<Head>
                <title>{'javascript Тесты'}</title>
                <meta property="og:title" content={`javaScript тесты разных уровней`} />
                <meta
                    name="google-site-verification"
                    content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
                />

                <meta name="yandex-verification" content="a99ae512e4f1c330" />
                <meta
                    name="description"
                    content={"JavaScript тесты разных уровней"}
                />
                <meta
                    property="og:description"
                    content={"JavaScript тесты разных уровней"}
                />

                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://discocode.ru/tests" />
                <meta property="og:site_name" content="DiscoCode" />
                <meta property="og:locale" content="ru_Ru" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:author" content="Дмитрий Черномашенцев" />
                <meta property="og:section" content="nextJs" />
                <meta property="og:tag" content="next, nextJs, js" />
            </Head>
        <AnimationContainer>
        <QuizCard  category="beginner" src="/tests/beginner/" text= "Для разработчиков JavaScript, которые только начинают изучать язык или недавно начали" title={'Тесты для начинающих'} />
        </AnimationContainer>

        </div>
    );
};

export default withLayout(index);
