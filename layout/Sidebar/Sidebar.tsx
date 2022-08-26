import React, { useContext } from 'react';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.css';
import SidebarMenu from '../../src/Components/SidebarMenu/SidebarMenu';
import { AppContext } from '../../context/app.context';
import Link from 'next/link';

const {sidebar,menu} = s;
const Sidebar = ({className, ...props}:SidebarProps):JSX.Element => {
    return (
        <div className={sidebar} {...props}>
            <SidebarMenu/>
            </div>
            
    );
};

export default Sidebar;

