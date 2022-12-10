
import React from 'react';
import cn from 'classnames';
import { ICard } from './Card.props';
import s from './Card.module.scss';
import Link from 'next/link';
const { body, body__footer, container, body__bg,  container__js, container__ts, container__next, container__react, body__title } = s;
const Card = ({ title,text, color, url }: ICard) => {
    return (

        <Link href={url}>
            <div className={cn(container, {
                [container__js]: color === 'js',
                [container__ts]: color === 'ts',
                [container__next]: color === 'next',
                [container__react]: color === 'react',

            })} >
                <div className={body}>
                    <div className={body__bg}>
                    <div className={body__title}>{title}</div>
                    </div>
                    <div className={body__footer}>
                        <div>{text}</div>
                    </div>
                </div>
            </div>
        </Link>


    );
};

export default Card;