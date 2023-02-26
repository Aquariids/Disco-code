import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { JsContextProps } from './postsJs.props';
import { PostMeta } from '../../../../pages/api/api';
import MenuMobileLinks from '../MenuMobileLinks';
const MobileMenuJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);

    const {posts_Basic_Js,posts_Advanced_Js,posts_Algorithms_Js,posts_Practice_Js,posts_Under_The_Hood_Js,posts_Interview_Js}:JsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMobileLinks posts={posts_Basic_Js} title="Базовый JavaScript" category='basic-js' page='js' />
                <MenuMobileLinks posts={posts_Advanced_Js} title="Продвинутый JavaScript" category='advanced-js' page='js'  />
                <MenuMobileLinks posts={posts_Algorithms_Js} title="Алгоритмы" category='algorithms-js' page='js' />
                <MenuMobileLinks posts={posts_Practice_Js} title="Практика & Webpack" category='practice-js' page='js' />
                <MenuMobileLinks posts={posts_Under_The_Hood_Js} title="JavaScript под капотом" category='under-the-hood-js' page='js' />
                {/* <MenuMobileLinks posts={posts_Interview_Js} title="Собеседование" category='interview-js' page='js' /> */}
            </>
        );
    

};

export default MobileMenuJs;