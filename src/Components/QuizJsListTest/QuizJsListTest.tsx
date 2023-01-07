import 'highlight.js/styles/default.css';
import QuizJs from '../QuizJs/QuizJs';
import s from './QuizJsListTest.module.scss';
import {quizDataBeginner1} from './QuizJsListTestBeginner.props';
const QuizJsListTest = (): JSX.Element => {

    return (
        <div>
            <QuizJs data={quizDataBeginner1}/>

        </div>
    );
};

export default QuizJsListTest;