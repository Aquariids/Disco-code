import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import { NextJsContextProps } from './postsNextJs.props';
import MenuMobileLinks from '../MenuMobileLinks';
import { BASIC_NEXT_JS, NEXT_JS } from '../../../../pages/api/pages';
const MobileMenuNextJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Next_Js}:NextJsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMobileLinks posts={posts_Basic_Next_Js} title="Основы next.js" category={BASIC_NEXT_JS} page={NEXT_JS} />
            </>
        );
    

};

export default MobileMenuNextJs;