import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../../mobileModalMenu/MobileModalMenu.props';
import { JsContextProps } from './postsJs.props';
import { PostMeta } from '../../../../pages/api/api';
const MobileMenuJs = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Js,posts_Advanced_Js,posts_Algorithms_Js,posts_Practice_Js,posts_Under_The_Hood_Js,posts_Interview_Js}:JsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <Menu posts={posts_Basic_Js} title="Базовый JavaScript" category='basic-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu posts={posts_Advanced_Js} title="Продвинутый JavaScript" category='advanced-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu posts={posts_Algorithms_Js} title="Алгоритмы" category='algorithms-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu posts={posts_Practice_Js} title="Практика & Webpack" category='practice-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu posts={posts_Under_The_Hood_Js} title="JavaScript под капотом" category='under-the-hood-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu posts={posts_Interview_Js} title="Собеседование" category='interview-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MobileMenuJs;