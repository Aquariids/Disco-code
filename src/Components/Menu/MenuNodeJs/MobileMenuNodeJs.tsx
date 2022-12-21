import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import { NextJsContextProps } from './postsNodeJs.props';
import MenuMobileLinks from '../MenuMobileLinks';
const MobileMenuNodeJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Node_Js}:NextJsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMobileLinks posts={posts_Basic_Node_Js} title="Фундаментальный nodeJs" category='basic-node-js' page='node-js' />
            </>
        );
    

};

export default MobileMenuNodeJs;