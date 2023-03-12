import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import { BASIC_NEXT_JS, NEXT_JS } from '../../../../pages/api/pages';
import DropdownMenuLinks from '../DropdownMenuLinks';
import { NextJsContextProps } from './postsNextJs.props';

const DropdownMenuNextJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Next_Js}:NextJsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <DropdownMenuLinks posts={posts_Basic_Next_Js} title="Основы next.js" category={BASIC_NEXT_JS} page={NEXT_JS} />;
            </>
        );
    

};

export default DropdownMenuNextJs;