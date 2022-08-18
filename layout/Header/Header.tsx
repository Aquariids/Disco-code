import React from 'react';
import { HeaderProps } from './Header.props';
import s from './Header.module.css';

const {header,nav,link,content} = s;

const Header = ({className, ...props}:HeaderProps):JSX.Element => {
    return (
        <header className={header} {...props}>
            <div className={content}>
            <nav className={nav}>
                <a className={link}  href='#'>javaScript</a>
                <a className={link}  href='#'>javaScript</a>
                <a className={link}  href='#'>javaScript</a>
            </nav>
                <div>все остальное</div>
            
            </div>
           
        </header>
    );
};

export default Header;