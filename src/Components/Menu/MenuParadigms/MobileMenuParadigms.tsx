import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MobileMenuParadigms = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);

    const {post_style_paradigms} = AllThemePosts;

        return (
            <>
                <Menu posts={post_style_paradigms} title=" Стили написания Кода" category='style' page='paradigms' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MobileMenuParadigms;