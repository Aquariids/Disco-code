import React from 'react';
import s from './MobileButton.module.scss';
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
        <button onTouchStart={mob} {...props} className={s.btn}>
            <div className={s.btn__content}>
                <div className={s.svg}>
                    <div className={cn(s.arrows)}>
                    <span className={cn(s.arrow_top, {
                        [s.arrow_top_true]: mobile === true,
                        [s.arrows_js]: router.pathname.startsWith('/content/js'),
                        [s.arrows_react]: router.pathname.startsWith('/content/react'),
                        [s.arrows_ts]: router.pathname.startsWith('/content/ts'),
                        [s.arrows_node]: router.pathname.startsWith('/content/node-js'),
                    })}><ArrowIcon /></span>
                    <span className={cn(s.arrow_down, {
                    [s.arrow_down_true]: mobile === true,
                    [s.arrows_js]: router.pathname.startsWith('/content/js'),
                    [s.arrows_react]: router.pathname.startsWith('//contentreact'),
                    [s.arrows_ts]: router.pathname.startsWith('/content/ts'),
                    [s.arrows_node]: router.pathname.startsWith('/content/node-js'),
                    })}><ArrowIcon /></span>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default MobileButton;