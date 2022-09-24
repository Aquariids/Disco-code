import Link from 'next/link';
import React from 'react';
import s from './MobileButton.module.css';
import { MobileButtonProps } from './MobileButton.props';
import MenuIcon from '../../../../public/menu_icon.svg';
const MobileButton = ({path, mobile, setMobile, ...props}:MobileButtonProps) => {
    function mob () {
        setMobile(!mobile);
    }
    return (
        <button onClick={mob} {...props} className={s.btn}>
            <span className={s.svg}>
            <MenuIcon/>
            </span>
        </button>
    );
};

export default MobileButton;