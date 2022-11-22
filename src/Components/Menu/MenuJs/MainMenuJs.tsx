import React from 'react';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';
interface MainPostsProps<T> {
    MainPosts: {
        posts_Basic_Js:T,
        posts_Advanced_Js:T,
        posts_Algorithms_Js:T,
        posts_Practice_Js:T,
    }
    

}



const MainMenuJs = ({MainPosts}:MainPostsProps<PostMeta[]>): JSX.Element => {
    const {posts_Basic_Js,posts_Advanced_Js,posts_Algorithms_Js,posts_Practice_Js} = MainPosts;



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