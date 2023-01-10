import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { withLayout } from '../../../layout/Layout';
import QuizJsListTestBeginner from '../../../src/Components/Quiz/QuizJsListTestBeginner/QuizJsListTestBeginner';
const test = () => {


    const router = useRouter();
    const {test} = router.query;


    return (
        <>
            <Head>
                <title>{`Javascript beginner тест - ${test} `}</title>
                <meta property="og:title" content={`javaScript тест ${test}`} />
                <meta
                    name="google-site-verification"
                    content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
                />

                <meta name="yandex-verification" content="a99ae512e4f1c330" />
                <meta
                    name="description"
                    content={`JavaScript тест ${test}`}
                />
                <meta
                    property="og:description"
                    content={`JavaScript тест ${test}`}
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
            <QuizJsListTestBeginner />

        </>);


};





export default withLayout(test);



