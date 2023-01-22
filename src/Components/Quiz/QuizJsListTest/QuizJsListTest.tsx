import 'highlight.js/styles/default.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import QuizJs from '../QuizJs/QuizJs';
import LoadingQuiz from '../LoadingQuiz/LoadingQuiz';

const QuizJsListTestBeginner = ({ data }): JSX.Element => {
    const router = useRouter();
    const { test } = router.query;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    });



    return (
        data.map((item, i) => {
            if (test === String(i + 1)) return !loading ? (<QuizJs key={i + 1} localKey={`test${i + 1}`} data={item} />) : <LoadingQuiz key={i + 1} />;

        })
    );
};

export default QuizJsListTestBeginner;