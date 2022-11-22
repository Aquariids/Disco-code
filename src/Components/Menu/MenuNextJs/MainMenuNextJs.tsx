import React from 'react';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';

interface MainPostsProps<T> {
    MainPosts: {
        posts_Basic_Next_Js:T,
    }
    

}
const MainMenuNextJs = ({MainPosts}:MainPostsProps<PostMeta[]>): JSX.Element => {
    const {posts_Basic_Next_Js} = MainPosts;
        return (
            <>
                <Menu posts={posts_Basic_Next_Js} title="Основы nextJs" category='basic-next-js' page='next-js' />
            </>
        );
    

};

export default MainMenuNextJs;