import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import { TsContextProps } from './postsTs.props';
import MenuMobileLinks from '../MenuMobileLinks';
import { BASIC_TS, TS } from '../../../../pages/api/pages';
const MobileMenuJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Ts}:TsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMobileLinks posts={posts_Basic_Ts} title="Основы typeScript" category={BASIC_TS} page={TS} />
            </>
        );
    

};

export default MobileMenuJs;