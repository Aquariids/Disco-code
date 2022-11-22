import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import Menu from '../Menu';

const DropdownMenuParadigms = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {post_style_paradigms} = AllThemePosts;
        return (
            <>
            <Menu posts={post_style_paradigms} title="Стили написания" category='style' dropdown={true} page='paradigms' />
            </>
        );
    

};

export default DropdownMenuParadigms;