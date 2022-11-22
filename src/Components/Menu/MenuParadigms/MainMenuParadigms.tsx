import React from 'react';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';

interface MainPostsProps<T> {
    MainPosts: {
        post_style_paradigms:T,
    }
    

}
const MainMenuParadigms = ({MainPosts}:MainPostsProps<PostMeta[]>): JSX.Element => {
    const {post_style_paradigms} = MainPosts;
        return (
            <>
                <Menu posts={post_style_paradigms} title=" Стили написания" category='style' page='paradigms' />
            </>
        );
    

};

export default MainMenuParadigms;