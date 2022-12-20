import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import MenuMainLinks from '../MenuMainLinks';
import { NextJsContextProps } from './postsNextJs.props';


const MainMenuNextJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Next_Js}:NextJsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMainLinks posts={posts_Basic_Next_Js} title="Основы nextJs" category='basic-next-js' page='next-js' />
            </>
        );
    

};

export default MainMenuNextJs;