import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import DropdownMenuLinks from '../DropdownMenuLinks';
import { NextJsContextProps } from './postsNextJs.props';

const DropdownMenuNextJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Next_Js}:NextJsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <DropdownMenuLinks posts={posts_Basic_Next_Js} title="Основы nextJs" category='basic-next-js' page='next-js' />;
            </>
        );
    

};

export default DropdownMenuNextJs;