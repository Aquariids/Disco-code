import 'highlight.js/styles/default.css';
import { useRouter } from 'next/router';
import {useEffect, useState } from 'react';
import QuizJs from '../QuizJs/QuizJs';
import { quizData1,quizData2,quizData3,quizData4,quizData5 } from './QuizJsListTestBeginner.props';
import LoadingQuiz from './LoadingQuiz';

const QuizJsListTestBeginner = (): JSX.Element => {
    const router = useRouter();
    const { test } = router.query;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);});


    if (test === '1') return !loading ? (<QuizJs localKey={'test1'}  data={quizData1} />): <LoadingQuiz/>;
    if (test === '2') return !loading ? (<QuizJs localKey={'test2'}  data={quizData2} />): <LoadingQuiz/>;
    if (test === '3') return !loading ? (<QuizJs localKey={'test3'}  data={quizData3} />): <LoadingQuiz/>;
    if (test === '4') return !loading ? (<QuizJs localKey={'test4'}  data={quizData4} />): <LoadingQuiz/>;
    if (test === '5') return !loading ? (<QuizJs localKey={'test5'}  data={quizData5} />): <LoadingQuiz/>;


    else {
        return <>{!loading ? (<div>Теста под номером {test} нет. УХОДИ!</div>): <LoadingQuiz/> }</>;
    }


};

export default QuizJsListTestBeginner;