import React from 'react';
import { FooterProps } from './Footer.props';

const Footer = ({...props}:FooterProps):JSX.Element => {
    return (
        <div {...props}>
            footer
        </div>
    );
};

export default Footer;