import Link from 'next/link';
import React from 'react';
import s from './QuizCard.module.scss';
import cn from 'classnames';
const QuizCard = ({category,src,text,title}) => {



    return (
        <div className={cn(s.tests, {
            [s.main_page_tests]: category === 'mainPage'
        })}>
            <div className={s.tests__card}>
                <div className={s.tests__card_title}>{title} </div>
                <div className={cn(s.tests__bg, {
                    [s.beginner]: category == "beginner",
                    [s.main_page]: category == "mainPage"
                })}>
                    <Link href={src}></Link>
                </div>
                <div className ={s.text}>
                        <p>{text}</p>
                    </div>
            </div>
        </div>
    );
};

export default QuizCard;