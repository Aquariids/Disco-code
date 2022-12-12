import React from 'react';
import cn from 'classnames';
import { ICard } from './Card.props';
import s from './Card.module.scss';
import Link from 'next/link';
const { body, footer, container, body__bg, container__js, container__ts, container__next, container__react, card__title } = s;
const Card = ({ title, color, url }: ICard) => {
    return (
        <div className={s.card}>
            <div className={card__title}>{title} </div>
            <Link href={url}>
           
                <div className={cn(container, {
                    [container__js]: color === 'js',
                    [container__ts]: color === 'ts',
                    [container__next]: color === 'next',
                    [container__react]: color === 'react',
                })} >
                    <div className={body}>
                        <div className={body__bg}>
                        </div>
                    </div>
                    
                </div>
                <div className={footer}>
                        Подробнее...
                    </div>
                    
            </Link>
            </div>
            


    );
};

export default Card;