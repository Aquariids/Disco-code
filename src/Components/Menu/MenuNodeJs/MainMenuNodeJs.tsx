import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import MenuMainLinks from '../MenuMainLinks';
import { NextJsContextProps } from './postsNodeJs.props';


const MainMenuNodeJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Node_Js}:NextJsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMainLinks posts={posts_Basic_Node_Js} title="Базовый nodeJs" category='basic-node-js' page='node-js' />
            </>
        );
    

};

export default MainMenuNodeJs;