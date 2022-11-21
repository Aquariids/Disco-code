import React from 'react';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';

interface MainPostsProps<T> {
    MainPosts: {
        basic_next_js:T,
    }
    

}
const MenuJs = ({MainPosts}:MainPostsProps<PostMeta[]>): JSX.Element => {
    const {basic_next_js} = MainPosts;
        return (
            <>
                <Menu posts={basic_next_js} title="Основы nextJs" category='basic-next-js' page='next-js' />
            </>
        );
    

};

export default MenuJs;