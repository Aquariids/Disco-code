import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { ICard } from './Card.props';
import s from './Card.module.scss';
import Link from 'next/link';
const {card__footer, card__container, card__container__js,
    card__container__ts, card__container__next, card__container__react, card__title,
    card__container__html } = s;
const Card = ({ title, color, url }: ICard) => {

    const h2ref = useRef<number | any>(null);

    const loadingCard = () => {
        addBacgroundActiveCard();
        setTimeout(()=> {
            localStorage.setItem('preloadingCard','loaded');
            removeBacgroundActiveCard();
        },300);
    };

 
    function addBacgroundActiveCard() {
        const activeEl = h2ref.current && h2ref.current;
        if(activeEl.classList.contains(card__container__js)) {
            activeEl.classList.add(s.activeCardJs);
        }
        else if(activeEl.classList.contains(card__container__react)) {
            activeEl.classList.add(s.activeCardReact);
        }
        else if(activeEl.classList.contains(card__container__next)) {
            activeEl.classList.add(s.activeCardNextJs);
        }
        else if(activeEl.classList.contains(card__container__ts)) {
            activeEl.classList.add(s.activeCardTS);
        } 
        else if(activeEl.classList.contains(card__container__html)) {
            activeEl.classList.add(s.activeCardHtml);
        } 
        else  {
            activeEl.classList.add(s.activeCardBasic);
        }
    }

    function removeBacgroundActiveCard() {
        const activeEl = h2ref.current && h2ref.current;
        if(activeEl.classList.contains(card__container__js)) {
            activeEl.classList.remove(s.activeCardJs);
        }
        else if(activeEl.classList.contains(card__container__react)) {
            activeEl.classList.remove(s.activeCardReact);
        }
        else if(activeEl.classList.contains(card__container__next)) {
            activeEl.classList.remove(s.activeCardNextJs);
        }
        else if(activeEl.classList.contains(card__container__ts)) {
            activeEl.classList.remove(s.activeCardTS);
        }

        else if(activeEl.classList.contains(card__container__html)) {
            activeEl.classList.remove(s.activeCardHtml);
        } 
        else  {
            activeEl.classList.remove(s.activeCardBasic);
        }
        
        
    }

    useEffect(() => {
        if(localStorage.getItem('preloadingCard') == 'loaded') {
            return;
        } else {
            loadingCard();
        }
    },[]);
    return (
        <div className={s.card}>
            <div className={card__title}>{title} </div>
            <div  onMouseOver={addBacgroundActiveCard} onMouseOut={removeBacgroundActiveCard}>
            <Link href={url}>
                <div ref={h2ref} className={cn(card__container, {
                    [card__container__js]: color === 'js',
                    [card__container__ts]: color === 'ts',
                    [card__container__next]: color === 'next',
                    [card__container__react]: color === 'react',
                    [card__container__html]: color === 'html',
                })} >
                    
                </div>
                <div className={card__footer}>
                        Подробнее...
                    </div>
                    
            </Link>
            </div>
            </div>
            


    );
};

export default Card;