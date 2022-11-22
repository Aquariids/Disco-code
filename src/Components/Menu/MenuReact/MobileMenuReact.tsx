import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../../mobileModalMenu/MobileModalMenu.props';
import { PostMeta } from '../../../../pages/api/api';
import { ReactContextProps } from './postsReact.props';
const MobileMenuReact = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

const { AllThemePosts } = useContext(AppContext);
const {posts_Basic_React}:ReactContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <Menu posts={posts_Basic_React} title=" Базовые темы react" category='basic-react' page='react' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MobileMenuReact;