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
import { MobileContext } from '../../../../context/app.context';

const mobileModalMenu = ({js,ts,react,paradigms,nextJs,htmlCss}:mobileModalMenuProps) => {
    const [mobile, setMobile] = useState<boolean>(false);
    const propsMobile = [mobile, setMobile];
  
    return (
        <>
            <MobileContext.Provider value={{propsMobile}}>
            <div className={cn(s.modal, {
                [s.modal_true]: mobile === true
            })}>
                {js === 'js'? <MobileMenuJs />:<></>}
                {ts === 'ts'? <MobileMenuTs />:<></>}
                {react === 'react'? <MobileMenuReact />:<></>}
                {nextJs === 'next-js'? <MobileMenuNextJs/>:<></>}
                {paradigms === 'paradigms'? <MobileMenuParadigms  />:<></>}
                {htmlCss === 'html-css'? <MobileMenuHtmlCss />:<></>}


            </div>

            <MobileButton mobile={mobile} setMobile={setMobile} />
            </MobileContext.Provider>
        </>
    );
};

export default mobileModalMenu;