import React from 'react';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.css';

const {sidebar} = s;
const Sidebar = ({ className, ...props}:SidebarProps):JSX.Element => {
    return (
        <div className={sidebar} {...props}>
            <div> sidebar</div>
            <div> sidebar</div>
            <div> sidebar</div>
            <div> sidebar</div>

        </div>
    );
};

export default Sidebar;