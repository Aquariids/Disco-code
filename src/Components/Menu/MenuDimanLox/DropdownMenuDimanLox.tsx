
import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import DropdownMenuLinks from '../DropdownMenuLinks';
import { DimanLoxContextProps } from './postsDimanLox.props';

const DropdownMenuDimanLox = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Diman_Lox,posts_Advanced_Diman_Lox}:DimanLoxContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                
        <DropdownMenuLinks posts={posts_Basic_Diman_Lox} title='Базовые темы по DimanLox' category='basic-diman-lox' page='diman-lox'/>
        <DropdownMenuLinks posts={posts_Advanced_Diman_Lox} title='Продвинутые темы по DimanLox' category='interview-diman-lox' page='diman-lox'/>
            </>
        );
    

};

export default DropdownMenuDimanLox;
    