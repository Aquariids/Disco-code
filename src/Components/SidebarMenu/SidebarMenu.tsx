import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../../context/app.context';
import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import { PostMeta } from '../../../pages/api/api';
import cn from 'classnames';
import Menu from './Menu/Menu';

const SidebarMenu = (): JSX.Element => {
   
    const router = useRouter();
    const pathname = router.asPath;


    if (router.pathname === '/js/[js]') {
        return (
            <nav className={s.navMenu}>
                <Menu title="Базовый JavaScript" category='basicjs' pathname = {pathname} />
                <Menu title="Продвинутый JavaScript" category='advancedjs' pathname = {pathname} />
            </nav>
        );
    }

    if (router.pathname === '/grid/[grid]') {
        return (
            <>
            <nav className={s.navMenu}>
                <Menu title="Гриды" category='grid' pathname = {pathname} />
            </nav>
            </>
        );
    }
    else {
        return (
            <></>
        );
    }

};

export default SidebarMenu;