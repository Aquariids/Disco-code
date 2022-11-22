import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MobileMenuNextJs = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);

    const {posts_Basic_Next_Js} = AllThemePosts;

        return (
            <>
                <Menu posts={posts_Basic_Next_Js} title="Основы nextJs" category='basic-next-js' page='next-js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MobileMenuNextJs;