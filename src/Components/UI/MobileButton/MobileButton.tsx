import React from 'react';
import s from './MobileButton.module.css';
import { MobileButtonProps } from './MobileButton.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
import { useRouter } from 'next/router';

const MobileButton = ({ mobile, setMobile, ...props }: MobileButtonProps) => {
    const router = useRouter();
    
    function mob() {
        setMobile(!mobile);
    }
    return (
        <button onTouchStart={mob}  {...props} className={s.btn}>
            <div className={s.contentBtn}>
                <div className={s.svg}>
                    <div className={cn(s.arrows)}>
                    <span className={cn(s.arrowTop, {
                        [s.arrowTopTrue]: mobile === true,
                        [s.arrowsJs]: router.pathname.startsWith('/js'),
                        [s.arrowsReact]: router.pathname.startsWith('/react'),
                        [s.arrowsTs]: router.pathname.startsWith('/ts'),


                    })}><ArrowIcon /></span>
                    <span className={cn(s.arrowDown, {
                    [s.arrowDownTrue]: mobile === true,
                    [s.arrowsJs]: router.pathname.startsWith('/js'),
                    [s.arrowsReact]: router.pathname.startsWith('/react'),
                    [s.arrowsTs]: router.pathname.startsWith('/ts'),


                    })}><ArrowIcon /></span>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default MobileButton;