import React from 'react';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';
interface MainPostsProps<T> {
    MainPosts: {
        posts_Basic_React:T,
    }
    

}

const MainMenuReact = ({MainPosts}:MainPostsProps<PostMeta[]>): JSX.Element => {
    const {posts_Basic_React} = MainPosts;


        return (
            <>
                <Menu posts={posts_Basic_React} title=" Базовые темы react" category='basic-react' page='react' />
                
            </>
        );
    };

export default MainMenuReact;