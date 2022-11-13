import React from 'react';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MenuJs = ({ setMobile, mobile, mobileMenuActive, sideBarMenuActive }: mobileMenuProps): JSX.Element => {

    if (mobileMenuActive === true) {
        return (
            <>
                <Menu title="Базовый JavaScript" category='basic-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu title="Продвинутый JavaScript" category='advanced-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu title="Алгоритмы" category='algorithms-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                {/* <Menu title="Практика" category='practice-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} /> */}
                {/* <Menu title="Простенькие задачи" category='.' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} /> */}
            </>
        );
    } if (sideBarMenuActive === true) {
        return (
            <>
                <Menu title="Базовый JavaScript" category='basic-js' dropdown={true} page='js' />
                <Menu title="Продвинутый JavaScript" category='advanced-js' dropdown={true} page='js' />
                <Menu title="Алгоритмы" category='algorithms-js' dropdown={true} page='js' />
                {/* <Menu title="Практика" category='practice-js' dropdown={true} page='js' /> */}


            </>
        );
    } else {
        return (
            <>
                <Menu title="Базовый JavaScript" category='basic-js' page='js' />
                <Menu title="Продвинутый JavaScript" category='advanced-js' page='js' />
                <Menu title="Алгоритмы" category='algorithms-js' page='js' />
                {/* <Menu title="Практика" category='practice-js' page='js' /> */}

                {/* <Menu title="Простенькие задачи" category='/' page='js' /> */}

                
            </>
        );
    }

};

export default MenuJs;