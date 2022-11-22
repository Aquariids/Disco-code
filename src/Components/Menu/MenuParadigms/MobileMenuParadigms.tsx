import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../../mobileModalMenu/MobileModalMenu.props';
import { PostMeta } from '../../../../pages/api/api';
import { ParadigmsContextProps } from './postsParadigms.props';
const MobileMenuParadigms = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const {post_Style_Paradigms}:ParadigmsContextProps<PostMeta[]> = AllThemePosts;

        return (
            <>
                <Menu posts={post_Style_Paradigms} title=" Стили написания Кода" category='style' page='paradigms' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MobileMenuParadigms;