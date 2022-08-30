import React from 'react';
import s from './Card.module.css';
import cn from 'classnames';
import { ICard } from './Card.props';
import Link from 'next/link';
const {body,footer,container,bg,title,yellow,blue} = s;
const Card = ({text,color,url}:ICard) => {
    return (
        <Link href={url}>
        <div className={cn(container, {
            [yellow]: color === 'yellow',
            [blue]: color === 'blue',

        })} >
            <div className={body}>
            <div className={bg}></div>
            <div className={footer}>
                <div className={title}> {text}</div>
            </div>
            </div>
        </div>
        </Link>

    );
};

export default Card;