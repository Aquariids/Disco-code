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
import MobileMenuNodeJs from '../../Menu/MenuNodeJs/MobileMenuNodeJs';

const mobileModalMenu = ({page}:mobileModalMenuProps) => {
    const [mobile, setMobile] = useState<boolean>(false);
    const propsMobile = [mobile, setMobile];
  
    return (
        <>
            <MobileContext.Provider value={{propsMobile}}>
            <div className={cn(s.modal, {
                [s.modal_true]: mobile === true
            })}>
                {page === 'js' && <MobileMenuJs />}
                {page === 'ts' && <MobileMenuTs />}
                {page === 'react' && <MobileMenuReact />}
                {page === 'next-js' && <MobileMenuNextJs/>}
                {page === 'paradigms' && <MobileMenuParadigms/>}
                {page === 'html-css' && <MobileMenuHtmlCss />}
                {page === 'node-js' && <MobileMenuNodeJs />}



            </div>

            <MobileButton mobile={mobile} setMobile={setMobile} />
            </MobileContext.Provider>
        </>
    );
};

export default mobileModalMenu;