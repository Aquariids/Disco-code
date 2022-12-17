import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';
import { HtmlCssContextProps } from './postsHtmlCss.props';


const DropdownMenuHtmlCss = (): JSX.Element => {

    const { AllThemePosts} = useContext(AppContext);
    const {posts_Html}:HtmlCssContextProps<PostMeta[]> = AllThemePosts;

    return (
        <>
            <Menu posts={posts_Html} category="html" title="Html" dropdown={true} page='html-css' />
        </>
    );
};

export default DropdownMenuHtmlCss;