import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import DropdownMenuLinks from '../DropdownMenuLinks';
import { NextJsContextProps } from './postsNodeJs.props';

const DropdownMenuNodeJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Node_Js}:NextJsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <DropdownMenuLinks posts={posts_Basic_Node_Js} title="Фундаментальный nodeJs" category='basic-node-js' page='node-js' />;
            </>
        );
    

};

export default DropdownMenuNodeJs;