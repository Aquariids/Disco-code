import React from 'react';
import { FooterProps } from './Footer.props';
import s from './Footer.module.css';
import cn from 'classnames';
const { footer } = s;

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, footer)} {...props}>
            <div>Компонент с документацией</div>
            <div>Сообщество</div>
        </footer>
    );
};

export default Footer;