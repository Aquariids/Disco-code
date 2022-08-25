import React from 'react';
import s from './HeaderMenu.module.css';
import { HeaderProps } from './Header.props';

const {header,nav,link,content,logo,github} = s;

const HeaderMenu = ({...props}:HeaderProps):JSX.Element => {
    return (
            <header className={header} {...props}>
            <div className={content}>
            <a className={logo}> <span>DiscoCode</span> </a>
            <nav className={nav}>
            <a className={link}  href='#'>javaScript</a>
            <a className={link}  href='#'>javaScript</a>
            <a className={link}  href='#'>javaScript</a>
            <a className={link}  href='#'>javaScript</a>
            <a className={link}  href='#'>javaScript</a>
            </nav>
            <div className={github}><a className={link}  target={"_blank"} href={'https://github.com/Aquariids/Disco-code'}>Github</a></div>
            </div>
           
        </header>
    );
};

export default HeaderMenu;