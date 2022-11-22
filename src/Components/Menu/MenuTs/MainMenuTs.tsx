import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';
import { TsContextProps } from './postsTs.props';

const MainMenuTs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Ts}:TsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <Menu posts={posts_Basic_Ts} title=" Основы typeScript" page='ts' />
                
            </>
        );
    };

export default MainMenuTs;