import React from 'react';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MenuJs = ({ setMobile, mobile, mobileMenuActive, sideBarMenuActive }: mobileMenuProps): JSX.Element => {

    if (mobileMenuActive === true) {
        return (
            <>
                <Menu title="Основы nextJs" category='basicnextjs' page='nextjs' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    } if (sideBarMenuActive === true) {
        return (
            <>
                <Menu title="Основы nextJs" category='basicnextjs' dropdown={true} page='nextjs' />
            </>
        );
    } else {
        return (
            <>
                <Menu title="Основы nextJs" category='basicnextjs' page='nextjs' />
            </>
        );
    }

};

export default MenuJs;