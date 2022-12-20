import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import DropdownMenuLinks from '../DropdownMenuLinks';
import { HtmlCssContextProps } from './postsHtmlCss.props';


const DropdownMenuHtmlCss = (): JSX.Element => {

    const { AllThemePosts} = useContext(AppContext);
    const {posts_Html}:HtmlCssContextProps<PostMeta[]> = AllThemePosts;

    return (
        <>
            <DropdownMenuLinks posts={posts_Html} category="html" title="Html" page='html-css' />
        </>
    );
};

export default DropdownMenuHtmlCss;