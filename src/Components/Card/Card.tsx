import React from 'react';
import s from './Card.module.css';
import cn from 'classnames';
import { ICard } from './Card.props';
import Link from 'next/link';
const {body,footer,container,bg,title,js,ts,next,react} = s;
const Card = ({text,color,url}:ICard) => {
    return (
        <Link href={url}>
        <div className={cn(container, {
            [js]: color === 'js',
            [ts]: color === 'ts',
            [next]: color === 'next',
            [react]: color === 'react',


        })} >
            <div className={body}>
            <div className={bg}></div>
            <div className={footer}>
                <div className={title}>{text}</div>
            </div>
            </div>
        </div>
        </Link>

    );
};

export default Card;