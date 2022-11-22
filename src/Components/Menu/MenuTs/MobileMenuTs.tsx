import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../../mobileModalMenu/MobileModalMenu.props';
import { PostMeta } from '../../../../pages/api/api';
import { TsContextProps } from './postsTs.props';
const MobileMenuJs = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {posts_Basic_Ts}:TsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <Menu posts={posts_Basic_Ts} title="Работа с typeScript" category='basic-ts' page='ts' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MobileMenuJs;