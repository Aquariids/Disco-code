import React from 'react';
import HeaderMenu from '../../src/Components/HeaderMenu/HeaderMenu';
import { HeaderProps } from './Header.props';
import s from './Header.module.css';

const Header = ({...props}):JSX.Element => {
    return (
             <div className={s.header}>
                <div className="content">
                <HeaderMenu/>

                </div>
             </div>
       
    );
};

export default Header;