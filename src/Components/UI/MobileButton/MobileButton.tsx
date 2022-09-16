import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import s from './MobileButton.module.css';
import { MobileButtonProps } from './MobileButton.props';

const MobileButton = ({mobileActive,...props}:MobileButtonProps) => {

    const router = useRouter();
    return (
        <button {...props} className={s.btn}>
            {router.asPath == '/js'?<Link href={mobileActive as string}><img style={{width:'30px'}} src='/menu_icon.svg'/></Link>:'' }
            {router.asPath != '/js'?<Link href={'/js'}><img style={{width:'30px'}} src='/menu_icon.svg'/></Link>:'' }

        </button>
    );
};

export default MobileButton;