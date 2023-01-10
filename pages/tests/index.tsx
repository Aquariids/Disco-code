import React from 'react';
import { withLayout } from '../../layout/Layout';
import QuizCard from '../../src/Components/QuizCard/QuizCard';
import s from './tests.module.scss';

const index = () => {
    return (
        <div className={s.main}>
        <QuizCard  category="beginner" src="/tests/beginner/" text= "Для разработчиков JavaScript, которые только начинают изучать язык или недавно начали" title={'Тесты для начинающих'} />
        </div>
    );
};

export default withLayout(index);
