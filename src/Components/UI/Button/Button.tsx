import React from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import s from './Button.module.css';
import ArrowIcon from './arrow.svg';

const Button = ({children,arrow = 'right',...props}:ButtonProps) => {
    return (
        <button {...props}  className={cn(s.button, {
            [s.active]: arrow === 'down',
        })}>
            {children}
            {arrow != 'none' && <span className={cn(s.arrow, {
                [s.down]: arrow === 'down',
            })}>
                {<ArrowIcon />}
                </span>}
        </button>
    );
};

export default Button;

