import { useRouter } from 'next/router';
import React from 'react';
import { withLayout } from '../../../layout/Layout';
import QuizJsListTestBeginner from '../../../src/Components/Quiz/QuizJsListTestBeginner/QuizJsListTestBeginner';
import s from './test.module.scss';
const test = () => {

    return (
        <div>
            <QuizJsListTestBeginner />
        </div>
    );


};

export default withLayout(test);