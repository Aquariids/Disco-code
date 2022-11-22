import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
const DropdownMenuReact = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_React} = AllThemePosts;

    return (
        <>
            <Menu posts={posts_Basic_React} title="Базовые темы react" category='basic-react' dropdown={true} page='react' />
        </>
    );
};

export default DropdownMenuReact;