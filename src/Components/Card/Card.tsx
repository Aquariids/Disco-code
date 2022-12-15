import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { ICard } from './Card.props';
import s from './Card.module.scss';
import Link from 'next/link';
const {card__footer, card__container, card__container__js, card__container__ts, card__container__next, card__container__react, card__title } = s;
const Card = ({ title, color, url }: ICard) => {

    const h2ref = useRef<number | any>(null);
    

    const loadingCard = () => {
        localStorage.setItem('loading','loaded');

        const activeEl = document.querySelectorAll(`.${card__container}`);
        activeEl.forEach((item)=> {
            if(item && item.classList.contains(card__container__js)) {
                item.classList.add(s.activeCardJs);
                setTimeout(()=> {
                    item.classList.remove(s.activeCardJs);
                },200);

            }
            else if(item && item.classList.contains(card__container__react)) {
                item.classList.add(s.activeCardReact);
                setTimeout(()=> {
                    item.classList.remove(s.activeCardReact);
                },200);

            }
            else if(item && item.classList.contains(card__container__next)) {
                item.classList.add(s.activeCardNextJs);
                setTimeout(()=> {
                    item.classList.remove(s.activeCardNextJs);
                },200);

            }
            else if(item && item.classList.contains(card__container__ts)) {
                item.classList.add(s.activeCardTS);
                setTimeout(()=> {
                    item.classList.remove(s.activeCardTS);
                },200);

            } else  {
                item && item.classList.add(s.activeCardBasic);
                setTimeout(()=> {
                    item.classList.remove(s.activeCardBasic);
                },200);
            }

        });
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
        } else  {
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
        else  {
            activeEl.classList.remove(s.activeCardBasic);
        }
        
        
    }

    useEffect(():any => {
        if(localStorage.getItem('loading') == 'loaded') {
            return;
        } else {
            loadingCard();
        }
    });
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