import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
const DropdownMenuTs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Ts} = AllThemePosts;

    return (
        <>
            <Menu posts={posts_Basic_Ts} title="Основы typeScript" category='basic-ts' dropdown={true} page='ts' />
        </>
    );
};

export default DropdownMenuTs;