import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../../mobileModalMenu/MobileModalMenu.props';
import { PostMeta } from '../../../../pages/api/api';
import { NextJsContextProps } from './postsNextJs.props';
const MobileMenuNextJs = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Next_Js}:NextJsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <Menu posts={posts_Basic_Next_Js} title="Основы nextJs" category='basic-next-js' page='next-js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MobileMenuNextJs;