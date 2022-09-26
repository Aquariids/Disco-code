import React from 'react';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';

const MenuJs = ({ setMobile, mobile,mobileMenuActive, }: mobileMenuProps): JSX.Element => {
    return (
        <>
            <Menu title=" Базовые темы react" category='basicreact' page='react'mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            {/* <Menu title=" Продвинутые темы react" category='.' page='react' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} /> */}
        </>
    );
};

export default MenuJs;