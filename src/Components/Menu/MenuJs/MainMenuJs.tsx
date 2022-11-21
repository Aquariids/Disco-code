import React, { useContext } from 'react';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';
interface MainPostsProps<T> {
    MainPosts: {
        basic_Js:T,
        advanced_Js:T,
        algorithms_js:T,
        practice_Js:T,
    }
    

}


const MenuJs = ({MainPosts}:MainPostsProps<PostMeta[]>): JSX.Element => {
    const {basic_Js, advanced_Js, algorithms_js,practice_Js} = MainPosts;


        return (
            <>
                <Menu posts={basic_Js} title="Базовый JavaScript" page='js' />
                <Menu posts={advanced_Js} title="Продвинутый JavaScript" page='js' />
                <Menu posts={algorithms_js} title="Алгоритмы" page='js' />
                <Menu posts={practice_Js} title="Практика & Webpack" page='js' />

                {/* <Menu title="Простенькие задачи" category='/' page='js' /> */}

                
            </>
        );
    };

export default MenuJs;