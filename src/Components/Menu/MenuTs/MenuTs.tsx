import React from 'react';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';

const MenuTs = ({ setMobile, mobile, sideBarMenuActive, mobileMenuActive }: mobileMenuProps): JSX.Element => {
    if (mobileMenuActive === true) {
        return (
            <>
                <Menu title=" Работа с typeScript" category='basic-ts' page='ts' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                {/* <Menu title="Фиксы некоторых ошибок" category='/' page='ts'  mobileMenu={true} setMobile={setMobile} mobileTrue={mobile}/> */}
            </>
        );
    }
 else {
        return (
            <>
                <Menu title=" Основы typeScript" category='basic-ts' page='ts' />
                {/* <Menu title="Фиксы некоторых ошибок" category='/' page='ts' /> */}
            </>
        );
    }
};

export default MenuTs;