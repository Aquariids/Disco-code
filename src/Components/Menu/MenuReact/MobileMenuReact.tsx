import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import { ReactContextProps } from './postsReact.props';
import MenuMobileLinks from '../MenuMobileLinks';
const MobileMenuReact = (): JSX.Element => {

const { AllThemePosts } = useContext(AppContext);
const {posts_Basic_React, posts_Interview_React}:ReactContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMobileLinks posts={posts_Basic_React} title=" Базовые темы react" category='basic-react' page='react' />
                <MenuMobileLinks posts={posts_Interview_React} title="Собеседование" category='interview-react' page='react' />
            </>
        );
    

};

export default MobileMenuReact;