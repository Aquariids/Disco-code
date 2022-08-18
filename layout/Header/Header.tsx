import React from 'react';
import { HeaderProps } from './Header.props';

const Header = ({...props}:HeaderProps):JSX.Element => {
    return (
        <div {...props}>
            header
        </div>
    );
};

export default Header;