import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MenuJs = ({ setMobile, mobile, mobileMenuActive, sideBarMenuActive,postsBasic }: mobileMenuProps): JSX.Element => {
console.log("(👍≖‿‿≖)👍 ✿ file: MenuJs.tsx ✿ line 6 ✿ MenuJs ✿ postsBasic", postsBasic)

    const { postsJs } = useContext(AppContext);

   

    if (mobileMenuActive === true) {
        return (
            <>
                {/* <Menu title="Базовый JavaScript" category='basic-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu title="Продвинутый JavaScript" category='advanced-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu title="Алгоритмы" category='algorithms-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                <Menu title="Практика & Webpack" category='practice-js' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} /> */}
                {/* <Menu title="Простенькие задачи" category='.' page='js' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} /> */}
            </>
        );
    } if (sideBarMenuActive === true) {
        return (
            <>
                <Menu posts={postsJs?.basic_js} title="Базовый JavaScript" dropdown={true} page='js' />
                <Menu posts={postsJs?.advanced_js} title="Продвинутый JavaScript" dropdown={true} page='js' />
                {/* <Menu title="Алгоритмы" category='algorithms-js' dropdown={true} page='js' />
                <Menu title="Практика & Webpack" category='practice-js' dropdown={true} page='js' /> */}


            </>
        );
    } else {
        return (
            <>
                <Menu posts={postsBasic} title="Базовый JavaScript" category='basic-js' page='js' />
                {/* <Menu title="Продвинутый JavaScript" category='advanced-js' page='js' />
                <Menu title="Алгоритмы" category='algorithms-js' page='js' />
                <Menu title="Практика & Webpack" category='practice-js' page='js' /> */}

                {/* <Menu title="Простенькие задачи" category='/' page='js' /> */}

                
            </>
        );
    }

};

export default MenuJs;