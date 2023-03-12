
import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import { BASIC_REACT, REACT } from '../../../../pages/api/pages';
import MenuMobileLinks from '../MenuMobileLinks';
import {ReactContextProps } from './postsReact.props';


const MobileMenuReact = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const { posts_Basic_React,posts_Interview_React}:ReactContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
            
        <MenuMobileLinks posts={posts_Basic_React} title='Базовые темы react' category={BASIC_REACT} page={REACT}/>
        {/* <MenuMobileLinks posts={posts_Interview_React} title='Собеседование' category='interview-react' page='react'/> */}
            </>
        );
    

};

export default MobileMenuReact;
    