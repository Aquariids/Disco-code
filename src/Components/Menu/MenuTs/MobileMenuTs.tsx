import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import { TsContextProps } from './postsTs.props';
import MenuMobileLinks from '../MenuMobileLinks';
const MobileMenuJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Ts}:TsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <MenuMobileLinks posts={posts_Basic_Ts} title="Работа с typeScript" category='basic-ts' page='ts' />
            </>
        );
    

};

export default MobileMenuJs;