import React from 'react';
import HeaderMenu from '../../src/Components/HeaderMenu/HeaderMenu';
import { HeaderProps } from './Header.props';
import s from './Header.module.css';
import cn from 'classnames';
const Header = ({className, ...props  }:HeaderProps): JSX.Element => {
    //error404 это костыль, что бы не было ошибки у логотипов при 404 ошибке. Так как я лого меняю от url, а у 404 его нет, поэтому начинается конфликт сервера и клиента.
    // в HeaderMenu я отрисовываю по сути два одинаковых хедера, но один для 404 без блек джека так сказать, а другой уже для всего остального.
    return (
        <header className={cn(className, s.header)} {...props} >
                <HeaderMenu  /> 
        </header>

    );
};

export default Header;