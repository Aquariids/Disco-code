import React, { useEffect, useState } from 'react';
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import s from './QuizJs.module.scss';
import cn from 'classnames';
hljs.registerLanguage('javascript', javascript);
const QuizJs = ({ data }): JSX.Element => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showEndScore, setShowEndScore] = useState(false);
    const [score, setScore] = useState(1);
    const [rigthAnswers,setRigthAnswers] = useState(0);
    const [disabledBtn, setDisabledBtn] = useState(true);
    const btns = document.querySelectorAll(`.${s.btn}`) as NodeList;
    const percent = Math.floor(rigthAnswers / data.length * 100);
    function percentForAnswer() {
        if (percent === 100) {
            return "Отлично, можешь собой гордиться!";
        } else if (percent > 55 && percent != 100) {
            return " <div class='result-text'> <span class='middle'> Хорошо, но есть ошибки!</span> </div>"
        } else if (percent < 55 && percent != 0 && percent > 30) {
            return "<div class='result-text'> <span class='bad'> Могло бы быть и хуже, попробуй еще! </span> </div>";
        } else if (percent < 30 && percent != 0) {
            return "<div class='result-text'> <span class='bad'>Попытка не пытка!</span> </div>";
        } else if (percent === 0) {
            return "<div class='result-text'> <span class ='wrong'> Ой, да ну, ты прикалываешься!? </span> </div>";
        }
    }

    const next = () => {
        btns.forEach((btn: any) => {
            btn.style.transition = '0s';
            btn.classList.remove(s.correctly);
            btn.classList.remove(s.wrong);
            btn.disabled = false;
        });
        setDisabledBtn(!disabledBtn);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < data.length) {
            setScore(score + 1);
            setCurrentQuestion(nextQuestion);
        } else {
            setShowEndScore(true);
        }

    };
    const handleAnswerClick = (isCorrect, e) => {
        const btns = document.querySelectorAll(`.${s.btn}`) as NodeList;
        setDisabledBtn(!disabledBtn);
        if (isCorrect === true) {
            setRigthAnswers(rigthAnswers + 1);
            e.target.classList.add(s.correctly);
            btns.forEach((btn: any) => {
                btn.disabled = true;
            });

        } else {
            btns.forEach((btn: any) => {
                btn.disabled = true;
                data[currentQuestion].answerOptions.map((item) => {
                    for (const key in item) {
                        if (item[key] === true) {
                            if (btn.textContent === item.answerText) {
                                btn.classList.add(s.correctly);
                            }
                        }

                    }


                });
            });
            e.target.classList.add(s.wrong);
            //     data[currentQuestion].answerOptions.map((btn) => {
            //         console.log(Object.keys(btn));

            // });
        }
    };


    useEffect(() => {
        hljs.initHighlighting();
    }, []);
    return (
        <>
            {showEndScore ? (
                <div className={s.quiz}>
                    <div className={s.quiz__content}>
                        <div className={s.end}>{rigthAnswers} правильных ответа из {data.length} </div>
                        <div className={cn({
                            [s.nice]: percent === 100, 
                            [s.middle]: percent > 55 && percent != 100,
                        }
                        )} >{percentForAnswer()}</div>
                      
                    </div>
                </div>
            ) :
                <div className={s.quiz}>
                    <div className={s.quiz__content}>
                        <div className={s.quiz__score}>{`${score}/${data.length}`}</div>
                        <div className={s.quest}> {data[currentQuestion].question}</div>
                        <pre>
                            <code className='hljs language-js'> {data[currentQuestion].code}</code>
                        </pre>

                        <div className={s.answers}>
                            {data[currentQuestion].answerOptions.map((answerOptions, index) => {
                                return <button className={s.btn} onClick={(e) => handleAnswerClick(answerOptions.correct, e)} key={index}>{answerOptions.answerText}</button>;
                            })}
                        </div>

                    </div>
                    <div className={s.next}>
                        <button disabled={disabledBtn} onClick={next} className={s.next__btn}> Продолжить </button>
                    </div>
                </div>
            }


        </>
    );
};

export default QuizJs;