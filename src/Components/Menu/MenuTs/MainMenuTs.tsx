import React from 'react';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';
interface MainPostsProps<T> {
    MainPosts: {
        basic_Ts:T,
    }
    

}


const MainMenuTs = ({MainPosts}:MainPostsProps<PostMeta[]>): JSX.Element => {
    const {basic_Ts} = MainPosts;


        return (
            <>
                <Menu posts={basic_Ts} title=" Основы typeScript" page='ts' />
                {/* <Menu title="Фиксы некоторых ошибок" category='/' page='ts' /> */}
                
            </>
        );
    };

export default MainMenuTs;