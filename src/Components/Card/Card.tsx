import React from 'react';
import cn from 'classnames';
import { ICard } from './Card.props';
import s from './Card.module.css';
import Link from 'next/link';
const { body, footer, container, bg,  js, ts, next, react } = s;
const Card = ({ title,text, color, url }: ICard) => {
    return (

        <Link href={url}>
            <div className={cn(container, {
                [js]: color === 'js',
                [ts]: color === 'ts',
                [next]: color === 'next',
                [react]: color === 'react',


            })} >
                <div className={body}>
                    <div className={bg}>
                    <div className={s.title}>{title}</div>
                    </div>
                    <div className={footer}>
                        <div className={s.text}>{text}</div>
                    </div>
                </div>
            </div>
        </Link>


    );
};

export default Card;