import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import MenuMainLinks from '../MenuMainLinks';
import { HtmlCssContextProps } from './postsHtmlCss.props';


const MainMenuHtmlCss = (): JSX.Element => {
    const { AllThemePosts} = useContext(AppContext);
    const {posts_Html}:HtmlCssContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMainLinks posts={posts_Html} title="Html" page='html-css' />                
            </>
        );
    };

export default MainMenuHtmlCss;