import React from 'react';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MenuJs = ({ setMobile, mobile, mobileMenuActive, sideBarMenuActive }: mobileMenuProps): JSX.Element => {

    if (mobileMenuActive === true) {
        return (
            <>
                <Menu title="Основы nextJs" category='basic-next-js' page='next-js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    } if (sideBarMenuActive === true) {
        return (
            <>
                <Menu title="Основы nextJs" category='basic-next-js' dropdown={true} page='next-js' />
            </>
        );
    } else {
        return (
            <>
                <Menu title="Основы nextJs" category='basic-next-js' page='next-js' />
            </>
        );
    }

};

export default MenuJs;