import 'highlight.js/styles/default.css';
import { useRouter } from 'next/router';
import NoneFooter404 from '../../../../pages/NoneFooter404';
import QuizJs from '../QuizJs/QuizJs';
import s from './QuizJsListTestBeginner.module.scss';
import { quizData1 } from './QuizJsListTestBeginner.props';
const QuizJsListTestBeginner = (): JSX.Element => {

    const router = useRouter();
    const { test } = router.query;

    if (test === '1') {
        return (
            <>
                <QuizJs data={quizData1} />
            </>
        );
    } else {
        return (
            <div className={s.er}>Такого теста нет</div>
        );
    }


};

export default QuizJsListTestBeginner;