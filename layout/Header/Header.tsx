import React from 'react';
import HeaderMenu from '../../src/Components/HeaderMenu/HeaderMenu';
import { HeaderProps } from './Header.props';
import s from './Header.module.css';
import cn from 'classnames';
const Header = ({className, ...props }:HeaderProps): JSX.Element => {
    return (
        <header className={cn(className, s.header)} {...props} >
                <HeaderMenu />
        </header>

    );
};

export default Header;