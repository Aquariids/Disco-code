
    import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import MenuMainLinks from '../MenuMainLinks';
import { DimanLoxContextProps } from './postsDimanLox.props';


const MainMenuDimanLox = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const { posts_Basic_Diman_Lox,posts_Advanced_Diman_Lox}:DimanLoxContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
            
        <MenuMainLinks posts={posts_Basic_Diman_Lox} title='Базовые темы по DimanLox' category='basic-diman-lox' page='diman-lox'/>
        <MenuMainLinks posts={posts_Advanced_Diman_Lox} title='Продвинутые темы по DimanLox' category='interview-diman-lox' page='diman-lox'/>
            </>
        );
    

};

export default MainMenuDimanLox;
    