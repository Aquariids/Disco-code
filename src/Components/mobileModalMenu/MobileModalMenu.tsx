import React, { useState } from 'react';
import MenuJs from '../Menu/MenuJs/MenuJs';
import MobileButton from '../UI/MobileButton/MobileButton';
import cn from 'classnames';
import MenuTs from '../Menu/MenuTs/MenuTs';
import MenuReact from '../Menu/MenuReact/MenuReact';
import { mobileModalMenuProps } from './MobileModalMenu.props';
import s from './MobileModalMenu.module.css';
import MenuParadigms from '../Menu/MenuParadigms/MenuParadigms';
import MenuNextJs from '../Menu/MenuNextJs/MenuNextJs';

const mobileModalMenu = ({js,ts,react,paradigms,nextJs}:mobileModalMenuProps) => {
    const [mobile, setMobile] = useState(false);

    return (
        <>
            
            <div className={cn(s.modal, {
                [s.modaltrue]: mobile === true
            })}>
                {js === 'js'? <MenuJs sideBarMenuActive={false} mobileMenuActive={true} setMobile={setMobile} mobile={mobile}/>:<></>}
                {ts === 'ts'? <MenuTs sideBarMenuActive={false} mobileMenuActive={true} setMobile={setMobile} mobile={mobile}/>:<></>}
                {react === 'react'? <MenuReact sideBarMenuActive={false} mobileMenuActive={true} setMobile={setMobile} mobile={mobile}/>:<></>}
                {paradigms === 'paradigms'? <MenuParadigms sideBarMenuActive={false} mobileMenuActive={true} setMobile={setMobile} mobile={mobile}/>:<></>}
                {nextJs === 'nextJs'? <MenuNextJs sideBarMenuActive={false} mobileMenuActive={true} setMobile={setMobile} mobile={mobile}/>:<></>}

            </div>

            <MobileButton mobile={mobile} setMobile={setMobile} />

        </>
    );
};

export default mobileModalMenu;