import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import Menu from '../Menu';

const DropdownMenuParadigms = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);

    const {posts_Paradigms} = AllThemePosts;
        return (
            <>
            <Menu posts={posts_Paradigms} title="Стили написания" category='style' dropdown={true} page='paradigms' />
            </>
        );
    

};

export default DropdownMenuParadigms;