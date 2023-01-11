import React, { useEffect, useState } from 'react';
import { withLayout } from '../../../layout/Layout';
import { quizData1 } from '../../../src/Components/Quiz/QuizJsListTestBeginner/QuizJsListTestBeginner.props';
import QuizTest from '../../../src/Components/Quiz/QuizTest/QuizTest';
import Head from 'next/head';
import s from './test.module.scss';

const index = () => {

    useEffect(() => {
        quizData1.map((item, i) => {
            quizData1[i].answerOptions.sort(() => Math.random() - 0.5);
        });
        quizData1.map((item, i) => {
            quizData1.sort(() => Math.random() - 0.5);
        });

    });




    return (
        <div className={s.page}>
            <Head>
                <title>{'Тесты для новичков javascript'}</title>
                <meta property="og:title" content={`javaScript тесты`} />
                <meta
                    name="google-site-verification"
                    content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
                />

                <meta name="yandex-verification" content="a99ae512e4f1c330" />
                <meta
                    name="description"
                    content={"JavaScript тесты для новичков"}
                />
                <meta
                    property="og:description"
                    content={"JavaScript тесты для новичков"}
                />

                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://discocode.ru/tests/beginner" />
                <meta property="og:site_name" content="DiscoCode" />
                <meta property="og:locale" content="ru_Ru" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:author" content="Дмитрий Черномашенцев" />
                <meta property="og:section" content="nextJs" />
                <meta property="og:tag" content="next, nextJs, js" />
            </Head>
            <QuizTest numTest={1}/>
            <QuizTest numTest={2}/>
            <QuizTest numTest={3}/>
            <QuizTest numTest={4}/>
            <QuizTest numTest={5}/>



        </div>
    );
};






export default withLayout(index);




