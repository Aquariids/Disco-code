import 'highlight.js/styles/default.css';
import { useRouter } from 'next/router';
import QuizJs from '../QuizJs/QuizJs';
import s from './QuizJsListTest.module.scss';
import { quizData1} from './QuizJsListTestBeginner.props';
const QuizJsListTestBeginner = (): JSX.Element => {

    const router = useRouter();
    const {test} = router.query;

    if(test === '1') {
        return (
            <div>
                <QuizJs data={quizData1} />
            </div>
        );
    } else {
        return(
            <>
            ТЕСТЫ СЛОМАЛИСЬ
            </>
        );
    }
   

};

export default QuizJsListTestBeginner;