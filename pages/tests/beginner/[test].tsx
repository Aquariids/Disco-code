import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { withLayout } from '../../../layout/Layout';
import { quizData1, quizData2, quizData3, quizData4, quizData5, quizData6, quizData7, quizData8 } from '../../../Content/Quiz/QuizJsListTestBeginner.props';
import QuizJsListTest from '../../../src/Components/Quiz/QuizJsListTest/QuizJsListTest';

const test = ({ data }: any) => {

    const router = useRouter();
    const { test } = router.query;

    useEffect(() => {
        data.map((item, i) => {
            item.sort(() => Math.random() - 0.5);
            item[i].answerOptions.sort(() => Math.random() - 0.5);
        });
    });


    return (
        <>
            <Head>
                <title>{`Javascript beginner тест`}</title>
                <meta property="og:title" content={`javaScript тест`} />
                <meta
                    name="google-site-verification"
                    content="ArMplWlyr69JYGz_vTfAjA8HzzYLdXm-p5gHjqgDihY"
                />

                <meta name="yandex-verification" content="a99ae512e4f1c330" />
                <meta
                    name="description"
                    content={`JavaScript тест`}
                />
                <meta
                    property="og:description"
                    content={`JavaScript тест`}
                />

                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://discocode.ru/tests/beginner/${test}`} />
                <meta property="og:site_name" content="DiscoCode" />
                <meta property="og:locale" content="ru_Ru" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:author" content="Дмитрий Черномашенцев" />
                <meta property="og:section" content="nextJs" />
                <meta property="og:tag" content="next, nextJs, js" />
            </Head>
            
            <QuizJsListTest data={data} />
        </>);


};



export default withLayout(test);


export const getStaticProps = async () => {
    const data = [quizData1, quizData2, quizData3, quizData4, quizData5, quizData6, quizData7, quizData8];
    return {
        props: {
            data,
        },
    };
};

export const getStaticPaths = async () => {
    const data = [quizData1, quizData2, quizData3, quizData4, quizData5, quizData6, quizData7, quizData8];


    const paths = data.map((item, i) => ({
        params: { test: (i + 1).toString() },
    }));
    return {
        paths,
        fallback: false,
    };
};

