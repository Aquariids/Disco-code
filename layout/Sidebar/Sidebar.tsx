import React from 'react';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.css';
import SidebarMenu from '../../src/Components/SidebarMenu/SidebarMenu';
import { useRouter } from 'next/router';

const {sidebar,menu} = s;
const Sidebar = ({className, ...props}:SidebarProps):JSX.Element => {
    const router = useRouter(); 
    if(router.route === '/'){
        return(
            <></>
        );
    } else {
        return (
            <div className={sidebar} {...props}>
                <SidebarMenu/>
                </div>
                
        );
    }
    
};

export default Sidebar;

