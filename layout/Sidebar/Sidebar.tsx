import React from 'react';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.css';
import SidebarMenu from '../../src/Components/SidebarMenu/SidebarMenu';
import { useRouter } from 'next/router';
import cn from 'classnames';

const {sidebar} = s;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = ({className, ...props}:SidebarProps):JSX.Element => {
    const router = useRouter(); 
    const asPath = router.asPath;
    
    if(asPath.length < 18){
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

