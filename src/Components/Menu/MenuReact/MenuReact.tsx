import React from 'react';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';

const MenuReact = ({ setMobile, mobile, mobileMenuActive, sideBarMenuActive }: mobileMenuProps): JSX.Element => {
    if (mobileMenuActive === true) {
        return (
            <>
                <Menu title=" Базовые темы react" category='basic-react' page='react' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                {/* <Menu title=" Продвинутые темы react" category='.' page='react' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} /> */}
            </>
        );
    }

    if (sideBarMenuActive === true) {
        return (
            <>
                <Menu title="Базовые темы react" category='basic-react' dropdown={true} page='react' />
            </>
        );
    } else {
        return (
            <>
                <Menu title=" Базовые темы react" category='basic-react' page='react' />
                {/* <Menu title=" Продвинутые темы react" category='.' page='react' /> */}
            </>
        );
    }
};

export default MenuReact;