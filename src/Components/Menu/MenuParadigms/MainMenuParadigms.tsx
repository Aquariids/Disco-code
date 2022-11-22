import React from 'react';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';

interface MainPostsProps<T> {
    MainPosts: {
        posts_Paradigms:T,
    }
    

}
const MainMenuParadigms = ({MainPosts}:MainPostsProps<PostMeta[]>): JSX.Element => {
    const {posts_Paradigms} = MainPosts;
        return (
            <>
                <Menu posts={posts_Paradigms} title=" Стили написания" category='style' page='paradigms' />
            </>
        );
    

};

export default MainMenuParadigms;