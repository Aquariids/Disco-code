import React from 'react';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';

const MenuTs = ({ setMobile, mobile, sideBarMenuActive, mobileMenuActive }: mobileMenuProps): JSX.Element => {
    if (mobileMenuActive === true) {
        return (
            <>
                <Menu title=" Стили написания Кода" category='style' page='paradigms' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                {/* <Menu title="Парадигмы программирования" category='concepts' page='paradigms' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} /> */}
            </>
        );
    }

    if (sideBarMenuActive === true) {
        return (
            <>
                <Menu title="Стили написания" category='style' dropdown={true} page='paradigms' />
                {/* <Menu title="Парадигмы " category='concepts' dropdown={true}  page='paradigms' /> */}

            </>
        );

    } else {
        return (
            <>
                <Menu title=" Стили написания" category='style' page='paradigms' />
                {/* <Menu title="Парадигмы программирования" category='concepts' page='paradigms' /> */}
                
            </>
        );
    }
};

export default MenuTs;