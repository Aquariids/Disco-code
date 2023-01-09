import 'highlight.js/styles/default.css';
import { useRouter } from 'next/router';
import {useState } from 'react';
import QuizJs from '../QuizJs/QuizJs';
import s from './QuizJsListTestBeginner.module.scss';
import { quizData1, quizData2 } from './QuizJsListTestBeginner.props';
const QuizJsListTestBeginner = (): JSX.Element => {
    const [percentTest1, setPercentTest1] = useState('0');
    const [percentTest2, setPercentTest2] = useState('0');
    const router = useRouter();
    const { test } = router.query;


    if (test === '1') {
        return <QuizJs localKey={'test1'} percentTest={percentTest1} setPercentTest={setPercentTest1} data={quizData1} />
    }
    if (test === '2') {
        return <QuizJs localKey={'test2'} percentTest={percentTest2} setPercentTest={setPercentTest2} data={quizData2} />;
    }
    else {
        return (
            <div className={s.er}>Теста под номером {test} нет. УХОДИ!</div>
        );
    }


};

export default QuizJsListTestBeginner;