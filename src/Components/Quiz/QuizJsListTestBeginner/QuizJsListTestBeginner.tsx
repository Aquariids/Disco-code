import 'highlight.js/styles/default.css';
import { useRouter } from 'next/router';
import {useEffect, useState } from 'react';
import QuizJs from '../QuizJs/QuizJs';
import { quizData1 } from './QuizJsListTestBeginner.props';
import LoadingQuiz from './LoadingQuiz';
const QuizJsListTestBeginner = (): JSX.Element => {
    const [percentTest1, setPercentTest1] = useState('0');
    const router = useRouter();
    const { test } = router.query;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);});


    if (test === '1') {
        return (
            <>
            {!loading ? (<QuizJs localKey={'test1'} percentTest={percentTest1} setPercentTest={setPercentTest1} data={quizData1} />): <LoadingQuiz/>}
            </>
        );
    } else {
        return <>{!loading ? (<div>Теста под номером {test} нет. УХОДИ!</div>): <LoadingQuiz/> }</>;
    }


};

export default QuizJsListTestBeginner;