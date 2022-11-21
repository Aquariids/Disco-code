import React, { useContext } from 'react';
import { NextJsContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MenuJs = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

    const { postsNextJs } = useContext(NextJsContext);


        return (
            <>
                <Menu posts={postsNextJs?.basic_next_js} title="Основы nextJs" category='basic-next-js' page='next-js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MenuJs;