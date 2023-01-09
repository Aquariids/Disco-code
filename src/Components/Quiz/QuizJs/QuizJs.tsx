import React, { useEffect, useState } from 'react';
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import s from './QuizJs.module.scss';
import cn from 'classnames';
import Link from 'next/dist/client/link';
hljs.registerLanguage('javascript', javascript);
const QuizJs = ({ data, percentTest, setPercentTest, localKey }): JSX.Element => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showEndScore, setShowEndScore] = useState(false);
    const [score, setScore] = useState(1);
    const [rigthAnswers, setRigthAnswers] = useState(0);
    const [disabledBtn, setDisabledBtn] = useState(true);
    const btns = document.querySelectorAll(`.${s.btn}`) as NodeList;
    const percent = Math.floor(rigthAnswers / data.length * 100);
    const nextBtn = document.querySelector(`.${s.next__btn}`) as HTMLElement;
    const about = document.querySelector(`.${s.about}`) as HTMLElement;

    if (disabledBtn === false && nextBtn != null) {
        nextBtn.classList.add(s.next__btn_active);
    } else {
        nextBtn && nextBtn.classList.remove(s.next__btn_active);
    }
    function percentForAnswer() {
        if (percent === 100) {
            return "Отлично, можешь собой гордиться!";
        } else if (percent > 55 && percent != 100) {
            return "Хорошо, но есть ошибки!";
        } else if (percent < 55 && percent != 0 && percent > 30 || percent == 50) {
            return " Могло бы быть и хуже, попробуй еще!";
        } else if (percent < 30 && percent != 0) {
            return "Попытка не пытка!";
        } else if (percent === 0) {
            return "Ой, да ну, ты прикалываешься!? ";
        }
    }

    const next = () => {

        btns.forEach((btn: any) => {
            about.style.display = 'none';
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
            if(about != null) {
                about.textContent = `${data[currentQuestion].about}`;
                about.style.display = 'grid';
            }
         
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
            if(about != null) {
                about.textContent = `${data[currentQuestion].about}`;
                about.style.display = 'grid';
            }
            
            e.target.classList.add(s.wrong);
        }
    };
   
    useEffect(() => {
       
    
        setPercentTest(percent);
        localStorage.setItem(`${localKey}`, `${percentTest}`);
       
        window.addEventListener('DOMContentLoaded', () => hljs.highlightAll(), false);

    },[]);
    return (
        <>
            {showEndScore ? (
                <div className={s.quiz}>
                    <div className={s.quiz__back}><span><Link href={'/tests/beginner'}>Вернуться к тестам</Link></span></div>
                    <div className={s.quiz__end}>
                        <div className={s.quiz__score_end}>Ваш результат: {rigthAnswers} из {data.length} - {`${percent}%`}</div>
                        <div></div>
                        <div className={cn({
                            [s.nice]: percent === 100,
                            [s.middle]: percent > 55 && percent != 100 || percent == 50,
                            [s.bad]: percent < 55 && percent != 0 && percent > 30,
                            [s.bad]: percent < 30 && percent != 0,
                            [s.veryBad]: percent === 0,

                        }
                        )} >{percentForAnswer()}</div>
                    </div>
                </div>
            ) :
                <div className={s.quiz}>
                    <div className={s.quiz__back}><span><Link href={'/tests/beginner'}>Вернуться к тестам</Link></span></div>
                    <div className={s.quiz__content}>
                        <div className={s.quiz__score}>{`${score}/${data.length}`}</div>
                        <div className={s.quest}> {data[currentQuestion].question}</div>
                        <pre>
                            <code className='hljs language-js'> {data[currentQuestion].code}</code>
                        </pre>
                        <div className={s.con}>
                            <div className={s.answers}>
                                {data[currentQuestion].answerOptions.map((answerOptions, index) => {
                                    return <button className={s.btn} onClick={(e) => handleAnswerClick(answerOptions.correct, e)} key={index}>{answerOptions.answerText}</button>;
                                })}
                            </div>

                            <div className={s.about}></div>
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