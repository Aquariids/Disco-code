import React from 'react';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';
interface MainPostsProps<T> {
    MainPosts: {
        posts_Basic_Ts:T,
    }
    

}

const MainMenuTs = ({MainPosts}:MainPostsProps<PostMeta[]>): JSX.Element => {
    const {posts_Basic_Ts} = MainPosts;


        return (
            <>
                <Menu posts={posts_Basic_Ts} title=" Основы typeScript" page='ts' />
                
            </>
        );
    };

export default MainMenuTs;