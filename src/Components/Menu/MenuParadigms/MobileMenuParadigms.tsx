import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import { ParadigmsContextProps } from './postsParadigms.props';
import MenuMobileLinks from '../MenuMobileLinks';
const MobileMenuParadigms = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {post_Style_Paradigms}:ParadigmsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMobileLinks posts={post_Style_Paradigms} title=" Стили написания Кода" category='style' page='paradigms' />
            </>
        );
    

};

export default MobileMenuParadigms;