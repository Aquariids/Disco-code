import React from 'react';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';

const MenuTs = ({ setMobile, mobile }: mobileMenuProps): JSX.Element => {
    return (
        <>
            <Menu title=" Работа с typeScript" category='basicts' page='ts'  mobileMenu={true} setMobile={setMobile} mobileTrue={mobile}/>
            {/* <Menu title="Фиксы некоторых ошибок" category='/' page='ts'  mobileMenu={true} setMobile={setMobile} mobileTrue={mobile}/> */}
        </>
    );
};

export default MenuTs;