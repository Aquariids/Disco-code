import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import MenuMainLinks from '../MenuMainLinks';
import { ReactContextProps } from './postsReact.props';

const MainMenuReact = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_React, posts_Interview_React}:ReactContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMainLinks posts={posts_Basic_React} title=" Базовые темы react" category='basic-react' page='react' />
                <MenuMainLinks posts={posts_Interview_React} title="Собеседование" category='interview-react' page='react' />
            </>
        );
    };

export default MainMenuReact;