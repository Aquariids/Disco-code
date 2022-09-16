import Link from 'next/link';
import React from 'react';
import s from './MobileButton.module.css';
import { MobileButtonProps } from './MobileButton.props';

const MobileButton = ({path,...props}:MobileButtonProps) => {

    return (
        <button {...props} className={s.btn}>
            {<Link href={path}><img style={{width:'30px'}} src='/menu_icon.svg'/></Link> }

        </button>
    );
};

export default MobileButton;