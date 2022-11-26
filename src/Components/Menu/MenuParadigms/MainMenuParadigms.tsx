import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import Menu from '../Menu';
import { ParadigmsContextProps } from './postsParadigms.props';

const MainMenuParadigms = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {post_Style_Paradigms}:ParadigmsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <Menu posts={post_Style_Paradigms} title=" Стили написания" category='style' page='paradigms' />
            </>
        );
    

};

export default MainMenuParadigms;