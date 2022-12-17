import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../../ListMobileMenu/mobileModalMenu/MobileModalMenu.props';
import { HtmlCssContextProps } from './postsHtmlCss.props';
import { PostMeta } from '../../../../pages/api/api';
const MobileMenuHtmlCss = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

    const { AllThemePosts} = useContext(AppContext);
    const {posts_Html}:HtmlCssContextProps<PostMeta[]> = AllThemePosts;
        return (
            <>
                <Menu posts={posts_Html} title="Html" category='html' page='html-css' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MobileMenuHtmlCss;