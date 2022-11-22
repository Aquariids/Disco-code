import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';
import { ReactContextProps } from './postsReact.props';

const MainMenuReact = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_React}:ReactContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <Menu posts={posts_Basic_React} title=" Базовые темы react" category='basic-react' page='react' />
            </>
        );
    };

export default MainMenuReact;