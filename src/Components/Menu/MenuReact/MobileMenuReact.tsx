import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MobileMenuReact = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {


    
const { AllThemePosts } = useContext(AppContext);
const {posts_Basic_React} = AllThemePosts;
        return (
            <>
                <Menu posts={posts_Basic_React} title=" Базовые темы react" category='basic-react' page='react' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MobileMenuReact;