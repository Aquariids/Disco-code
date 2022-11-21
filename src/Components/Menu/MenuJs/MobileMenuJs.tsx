import React, { useContext } from 'react';
import { JsContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MobileMenuJs = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

    const { postsJs } = useContext(JsContext);

        return (
            <>
                <Menu posts={postsJs?.postsJsBasic} title="Базовый JavaScript" category='basic-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu posts={postsJs?.postsJsAdvanced} title="Продвинутый JavaScript" category='advanced-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu posts={postsJs?.postsJsAlgorithms} title="Алгоритмы" category='algorithms-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu posts={postsJs?.postsJsPractice} title="Практика & Webpack" category='practice-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
            </>
        );
    

};

export default MobileMenuJs;