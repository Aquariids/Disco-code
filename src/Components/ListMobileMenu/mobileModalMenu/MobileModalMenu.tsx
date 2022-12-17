import React, { useState } from 'react';
import MobileButton from '../../UI/MobileButton/MobileButton';
import cn from 'classnames';
import {mobileModalMenuProps } from './MobileModalMenu.props';
import s from './MobileModalMenu.module.scss';
import MobileMenuJs from '../../Menu/MenuJs/MobileMenuJs';
import MobileMenuTs from '../../Menu/MenuTs/MobileMenuTs';
import MobileMenuParadigms from '../../Menu/MenuParadigms/MobileMenuParadigms';
import MobileMenuReact from '../../Menu/MenuReact/MobileMenuReact';
import MobileMenuNextJs from '../../Menu/MenuNextJs/MobileMenuNextJs';
import MobileMenuHtmlCss from '../../Menu/MenuHtml&css/MobileMenuHtmlCss';

const mobileModalMenu = ({js,ts,react,paradigms,nextJs,htmlCss}:mobileModalMenuProps) => {
    const [mobile, setMobile] = useState(false);

    return (
        <>
            
            <div className={cn(s.modal, {
                [s.modal_true]: mobile === true
            })}>
                {js === 'js'? <MobileMenuJs setMobile={setMobile} mobile={mobile} />:<></>}
                {ts === 'ts'? <MobileMenuTs setMobile={setMobile} mobile={mobile}/>:<></>}
                {react === 'react'? <MobileMenuReact setMobile={setMobile} mobile={mobile}/>:<></>}
                {nextJs === 'next-js'? <MobileMenuNextJs setMobile={setMobile} mobile={mobile}/>:<></>}
                {paradigms === 'paradigms'? <MobileMenuParadigms  setMobile={setMobile} mobile={mobile}/>:<></>}
                {htmlCss === 'html-css'? <MobileMenuHtmlCss  setMobile={setMobile} mobile={mobile}/>:<></>}


            </div>

            <MobileButton mobile={mobile} setMobile={setMobile} />

        </>
    );
};

export default mobileModalMenu;