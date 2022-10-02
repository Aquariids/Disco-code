import React from 'react';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MenuJs = ({ setMobile, mobile, mobileMenuActive, sideBarMenuActive }: mobileMenuProps): JSX.Element => {

    if (mobileMenuActive === true) {
        return (
            <>
                <Menu title="Базовый JavaScript" category='basicjs' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu title="Продвинутый JavaScript" category='advancedjs' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu title="Алгоритмы" category='algorithmsjs' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu title="Простенькие задачи" category='.' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    } if (sideBarMenuActive === true) {
        return (
            <>
                <Menu title="Базовый JavaScript" category='basicjs' dropdown={true} page='js' />
                <Menu title="Продвинутый JavaScript" category='advancedjs' dropdown={true} page='js' />
                <Menu title="Алгоритмы" category='algorithmsjs' dropdown={true} page='js' />
            </>
        );
    } else {
        return (
            <>
                <Menu title="Базовый JavaScript" category='basicjs' page='js' />
                <Menu title="Продвинутый JavaScript" category='advancedjs' page='js' />
                <Menu title="Алгоритмы" category='algorithmsjs' page='js' />
                <Menu title="Простенькие задачи" category='/' page='js' />
            </>
        );
    }

};

export default MenuJs;