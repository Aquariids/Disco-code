import Link from 'next/link';
import React from 'react';
import s from './QuizTest.module.scss';
import cn from 'classnames';
const QuizTest = ({percent}) => {
    return (
        <div className={s.container}>
        <div className={s.test}>
            <div className={s.test__title}>Тест 1</div>
            <div className={s.test__content}>
                <div className={s.test__score}> Пройден на <span className={cn({
                     [s.nice]: percent === 100,
                     [s.middle]: percent > 55 && percent != 100 ,
                     [s.bad]: percent < 55 && percent != 0 && percent > 30 || percent == 50,
                     [s.bad_bad]: percent < 30 && percent != 0,
                     [s.veryBad]: percent === 0,
                })} >{`${percent ? percent : '0'}%`}</span></div>
                <div className={s.start}><Link href={'/tests/beginner/1'}>Начать</Link></div>
            </div>
        </div>
    </div>
    );
};

export default QuizTest;