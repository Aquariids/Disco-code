import Link from 'next/link';
import React from 'react';
import s from './MobileButton.module.css';
import { MobileButtonProps } from './MobileButton.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

const MobileButton = ({ path, mobile, setMobile, ...props }: MobileButtonProps) => {
    function mob() {
        setMobile(!mobile);
    }
    return (
        <button onClick={mob} {...props} className={s.btn}>
            <div className={s.contentBtn}>
                <div className={s.svg}>
                    <div className={cn(s.arrows)}>
                    <span className={cn(s.arrowTop, {
                        [s.arrowTopTrue]: mobile === true
                    })}><ArrowIcon /></span>
                    <span className={cn(s.arrowDown, {
                    [s.arrowDownTrue]: mobile === true
                    })}><ArrowIcon /></span>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default MobileButton;