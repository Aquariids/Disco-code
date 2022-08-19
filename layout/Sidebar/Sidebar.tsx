import React from 'react';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.css';

const {sidebar,menu} = s;
const Sidebar = ({ className, ...props}:SidebarProps):JSX.Element => {
    return (
        <div className={sidebar} {...props}>
            <div className={menu}> <div>mfpdsfmsds</div></div>

        </div>
    );
};

export default Sidebar;