import React, { useContext } from 'react';
import { TsContext } from '../../../../context/app.context';
import Menu from '../Menu';
import { mobileMenuProps } from '../Menu.props';
const MobileMenuJs = ({ setMobile, mobile, }: mobileMenuProps): JSX.Element => {

    const { postsTs } = useContext(TsContext);

        return (
            <>


                <Menu posts={postsTs?.basic_Ts} title=" Работа с typeScript" category='basic-ts' page='ts' mobileMenu={true} setMobile={setMobile} mobileTrue={mobile} />
                {/* <Menu title="Фиксы некоторых ошибок" category='/' page='ts'  mobileMenu={true} setMobile={setMobile} mobileTrue={mobile}/> */}
            </>
        );
    

};

export default MobileMenuJs;