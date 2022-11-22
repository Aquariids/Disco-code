import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';
import { JsContextProps } from './postsJs.props';


const MainMenuJs = (): JSX.Element => {
    const { AllThemePosts} = useContext(AppContext);
    const {posts_Basic_Js,posts_Advanced_Js,posts_Algorithms_Js,posts_Practice_Js}:JsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <Menu posts={posts_Basic_Js} title="Базовый JavaScript" page='js' />
                <Menu posts={posts_Advanced_Js} title="Продвинутый JavaScript" page='js' />
                <Menu posts={posts_Algorithms_Js} title="Алгоритмы" page='js' />
                <Menu posts={posts_Practice_Js} title="Практика & Webpack" page='js' />                
            </>
        );
    };

export default MainMenuJs;