import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import s from './QuizTest.module.scss';
import cn from 'classnames';
const QuizTest = ({ numTest }) => {

    const [percent, setPercent] = useState('') as any;
    useEffect(() => {
        if (localStorage.getItem(`test${numTest}`) != null) {
            setPercent(localStorage.getItem(`test${numTest}`));
        }

    });
    return (
        <div className={s.container}>
            <div className={s.test}>
                <div className={s.test__title}>Тест {numTest}</div>


                <div className={cn(s.test__content, {
                    [s.activeNiceCard]: percent === '100',
                    [s.activeMiddleCard]: percent > 55 && percent != 100,
                    [s.activeBadCard]: percent < 55 && percent != 0 && percent > 30 || percent == 50,
                    [s.activeVeryBadCard]: percent === '0' || percent < 30 && percent != 0,
                })}>

                    <Link href={`/tests/beginner/${numTest}`}>

                        <span className={s.test__score}> Пройден на <span className={cn({
                            [s.nice]: percent === '100',
                            [s.middle]: percent > 55 && percent != 100,
                            [s.bad]: percent < 55 && percent != 0 && percent > 30 || percent == 50,
                            [s.bad_bad]: percent < 30 && percent != 0,
                            [s.veryBad]: percent === '0',
                        })} >{`${percent ? percent : '0'}%`}</span></span>

                    </Link>

                    <div className={s.start}><Link href={`/tests/beginner/${numTest}`}>Начать</Link></div>



                </div>
            </div>


        </div >
    );
};

export default QuizTest;