import React from 'react';
import HeaderMenu from '../../src/Components/HeaderMenu/HeaderMenu';
import { HeaderProps } from './Header.props';
import s from './Header.module.css';
import { Loading } from '../../pages/_app';

const Header = ({ ...props }:HeaderProps): JSX.Element => {
    return (
        <header {...props} className={s.header}>
                <HeaderMenu />
        </header>

    );
};

export default Header;