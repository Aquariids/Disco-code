import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import { BASIC_TS, TS } from '../../../../pages/api/pages';
import DropdownMenuLinks from '../DropdownMenuLinks';
import { TsContextProps } from './postsTs.props';
const DropdownMenuTs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Ts}:TsContextProps<PostMeta[]> = AllThemePosts;

    return (
        <>
            <DropdownMenuLinks posts={posts_Basic_Ts} title="Основы typeScript" category={BASIC_TS} page={TS} />
        </>
    );
};

export default DropdownMenuTs;