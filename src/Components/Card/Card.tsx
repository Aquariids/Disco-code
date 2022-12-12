import React from 'react';
import cn from 'classnames';
import { ICard } from './Card.props';
import s from './Card.module.scss';
import Link from 'next/link';
const { body, footer, container, body__bg, container__js, container__ts, container__next, container__react, card__title } = s;
const Card = ({ title, color, url }: ICard) => {

    function addBacgroundActiveCard(e:any) {
        const activeEl = e.target;
        if(activeEl && activeEl.classList.contains(container__react)) {
            activeEl.classList.add(s.activeCardReact);
        }
    }
    function removeBacgroundActiveCard(e:any) {
        const activeEl = e.target;
        if(activeEl && activeEl.classList.contains(container__react)) {
            activeEl.classList.remove(s.activeCardReact);
        }
        
    }
    return (
        <div className={s.card}>
            <div className={card__title}>{title} </div>
            <Link href={url}>
                <div onMouseOver={addBacgroundActiveCard} onMouseOut={removeBacgroundActiveCard} className={cn(container, {
                    [container__js]: color === 'js',
                    [container__ts]: color === 'ts',
                    [container__next]: color === 'next',
                    [container__react]: color === 'react',
                })} >
                    
                </div>
                <div className={footer}>
                        Подробнее...
                    </div>
                    
            </Link>
            </div>
            


    );
};

export default Card;