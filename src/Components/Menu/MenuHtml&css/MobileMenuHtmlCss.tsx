import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { HtmlCssContextProps } from './postsHtmlCss.props';
import { PostMeta } from '../../../../pages/api/api';
import MenuMobileLinks from '../MenuMobileLinks';
const MobileMenuHtmlCss = (): JSX.Element => {

    const { AllThemePosts} = useContext(AppContext);
    const {posts_Html}:HtmlCssContextProps<PostMeta[]> = AllThemePosts;
        return (
            <>
                <MenuMobileLinks posts={posts_Html} title="Html" category='html' page='html-css' />
            </>
        );
    

};

export default MobileMenuHtmlCss;