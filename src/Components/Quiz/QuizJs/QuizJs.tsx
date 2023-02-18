import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github-dark-dimmed.css';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import s from './QuizJs.module.scss';
import cn from 'classnames';
import Link from 'next/dist/client/link';
import AnimationContainer from '../../AnimationContainers/AnimationContainer';
hljs.registerLanguage('javascript', javascript);
const QuizJs = ({ data, localKey }): JSX.Element => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showEndScore, setShowEndScore] = useState(false);
    const [score, setScore] = useState(1);
    const [rigthAnswers, setRigthAnswers] = useState(0);
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [aboutText, setAboutText] = useState();
    const about = document.querySelector(`.${s.about}`) as HTMLElement;
    const neko = document.querySelector(`.${s.neko}`) as HTMLElement;
    const btns = document.querySelectorAll(`.${s.btn}`) as NodeList;

    const percent = Math.floor(rigthAnswers / data.length * 100);
    const nextBtn = document.querySelector(`.${s.next__btn}`) as HTMLElement;
    const nekoText = document.querySelector(`.${s.neko__oval}`) as HTMLElement;
    useEffect(() => {
        setAboutText(data[currentQuestion].about);
        if (disabledBtn === false && nextBtn != null) {
            nextBtn.classList.add(s.next__btn_active);
        } else {
            nextBtn && nextBtn.classList.remove(s.next__btn_active);
        }
        if (showEndScore) {
            localStorage.setItem(`${localKey}`, `${percent}`);

        }

    });




    function percentForAnswer() {
        if (percent === 100) {
            return "Отлично, можешь собой гордиться!";
        } else if (percent > 55 && percent != 100) {
            return "Хорошо, но есть ошибки!";
        } else if (percent < 55 && percent != 0 && percent > 30 || percent == 50) {
            return "Могло бы быть и хуже, попробуй еще!";
        } else if (percent < 30 && percent != 0) {
            return "Попытка не пытка!";
        } else if (percent === 0) {
            return "Ой, да ну, ты прикалываешься!? ";
        }
    }

    const next = () => {

        about.style.display = 'none';
        nekoText.style.opacity = '0';
        about.style.transition = '0s';
        about.style.opacity = '0';

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
        about.style.transition = '.2s';
        about.style.display = 'grid';


        setDisabledBtn(!disabledBtn);
        if (isCorrect === true) {
            neko.style.backgroundImage = "url('/images/quizCard/test2.png')";
            nekoText.style.opacity = '1';
            if (percent > 50 && score > 2) {
                nekoText.textContent = 'Ты просто кисик:з';

            } else {
                nekoText.textContent = 'Молодец!';

            }
            if (about != null) {
                about.textContent = `${data[currentQuestion].about}`;
                about.style.opacity = '1';
            }

            setRigthAnswers(rigthAnswers + 1);
            e.target.classList.add(s.correctly);
            btns.forEach((btn: any) => {
                btn.disabled = true;
            });

        } else {
            neko.style.backgroundImage = "url('/images/quizCard/test3.png')";
            nekoText.style.opacity = '1';
            if (percent == 0 && score > 2) {
                nekoText.textContent = 'Постарайся!';
            }
            if(percent > 85 && score == 8 ) {
                nekoText.textContent = 'Ты все равно кисик:з';

            }
            else {
                nekoText.textContent = 'Все получится!';
            }

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
            if (about != null) {
                about.style.opacity = '1';
                about.textContent = `${data[currentQuestion].about}`;

            }

            e.target.classList.add(s.wrong);
        }
    };

    return (
        <div className={s.page}>
            <AnimationContainer>
                {showEndScore ? (
                    <div className={s.quiz}>
                        <div className={s.end_container}>
                            <div className={s.quiz__back}><span><Link href={'/tests/beginner'}>Вернуться к тестам</Link></span></div>
                            <div className={s.quiz__end}>
                                <div className={cn(s.quiz__score_end, {
                                    [s.nice]: percent === 100,
                                    [s.middle]: percent > 55 && percent != 100,
                                    [s.bad]: percent < 55 && percent != 0 && percent > 30 || percent == 50,
                                    [s.bad_bad]: percent < 30 && percent != 0,
                                    [s.veryBad]: percent === 0,

                                })}><span style={{ color: `black` }}>Ваш результат: <span className={s.nice}>{rigthAnswers}</span> из {data.length} - </span> {`${percent}%`}</div>
                                <div className={s.neko}>
                                    <blockquote className={s.neko__oval}>
                                    </blockquote>
                                </div>
                                <div className={cn({
                                    [s.nice]: percent === 100,
                                    [s.middle]: percent > 55 && percent != 100,
                                    [s.bad]: percent < 55 && percent != 0 && percent > 30 || percent == 50,
                                    [s.bad_bad]: percent < 30 && percent != 0,
                                    [s.veryBad]: percent === 0,

                                }
                                )} >{percentForAnswer()}</div>
                            </div>
                        </div>
                    </div>
                ) :
                    <div className={s.quiz}>
                        <div className={s.quiz__back}><span><Link href={'/tests/beginner'}>Вернуться к тестам</Link></span></div>
                        <div className={s.quiz__content}>
                            <div className={s.quiz__score}>{`${score}/${data.length}`}</div>
                            <div className={s.quest}> {data[currentQuestion].question}</div>
                            <div className={s.container_code_about}>
                                <div className={s.about}>{aboutText}</div>
                                <Highlight className={cn('hljs language-js', s.cod)}>
                                    {data[currentQuestion].code}
                                </Highlight>
                            </div>




                            <div className={s.container_answer}>
                                <div className={s.answers}>
                                    {data[currentQuestion].answerOptions.map((answerOptions, index) => {
                                        return <button className={s.btn} onClick={(e) => handleAnswerClick(answerOptions.correct, e)} key={index}>{answerOptions.answerText}</button>;
                                    })}
                                </div>
                                <div className={s.neko}>
                                    <blockquote className={s.neko__oval}>
                                    </blockquote>
                                </div>
                            </div>

                        </div>
                        <div className={s.next}>
                            <button disabled={disabledBtn} onClick={next} className={s.next__btn}> Продолжить </button>
                        </div>
                    </div>
                }


            </AnimationContainer>
        </div>
    );
};

export default QuizJs;