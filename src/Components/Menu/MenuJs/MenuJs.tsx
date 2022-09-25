import React from 'react';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';

const MenuJs = ({ setMobile, mobile }: mobileMenuProps): JSX.Element => {
    return (
        <>
            <Menu title="Базовый JavaScript" category='basicjs' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            <Menu title="Продвинутый JavaScript" category='advancedjs' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            <Menu title="Алгоритмы" category='.' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            <Menu title="Простенькие задачи" category='.' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
        </>
    );
};

export default MenuJs;