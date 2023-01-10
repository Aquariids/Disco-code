import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { withLayout } from '../../../layout/Layout';
import s from './test.module.scss';
import { quizData1 } from '../../../src/Components/Quiz/QuizJsListTestBeginner/QuizJsListTestBeginner.props';
import cn from 'classnames';
import QuizTest from '../../../src/Components/Quiz/QuizTest/QuizTest';
const index = () => {
    const [percent1, setPercent1] = useState('') as any;
    useEffect(() => {
        if (localStorage.getItem('test1') != null) {
            setPercent1(localStorage.getItem('test1'));
        }

    }, []);


    useEffect(() => {
        quizData1.map((item, i) => {
            quizData1[i].answerOptions.sort(() => Math.random() - 0.5);
        });
    });

    return (
        <div>
            <QuizTest percent={percent1}/>
        </div>
    );
};





export default withLayout(index);



