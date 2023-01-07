import React, { useEffect, useState } from 'react';
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import s from './QuizJs.module.scss';
hljs.registerLanguage('javascript', javascript);
const QuizJs = ({data}): JSX.Element => {
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [showEndScore, setShowEndScore] = useState(false);
    const [score, setScore] = useState(1);
    const handleAnswerClick = (isCorrect) => {

        if(isCorrect === true) {
            alert('все четко');
        }
        const nextQuestion = currentQuiz + 1;

        if (nextQuestion < data.length) {
            setCurrentQuiz(nextQuestion);
        } else {
            setShowEndScore(true);
        }
    };
    useEffect(() => {
        hljs.initHighlighting();
    }, []);
    return (
        <>
            {showEndScore ? (<div className={s.end}>Вы выполнили {score} </div>) :

                <div className={s.quiz}>
                    <div className={s.quest}> {data[currentQuiz].question}</div>
                    <pre>
                        <code className='hljs language-js'> {data[currentQuiz].code}</code>
                    </pre>

                    <div className={s.answe}>
                        {data[currentQuiz].answerOptions.map((answerOptions, index) => {
                            return <button onClick={()=> handleAnswerClick(answerOptions.correct)} key={index}>{answerOptions.answerText}</button>;
                        })}
                    </div>

                </div>
            }


        </>
    );
};

export default QuizJs;