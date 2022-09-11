import React from 'react';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.css';
import SidebarMenu from '../../src/Components/SidebarMenu/SidebarMenu';
import { useRouter } from 'next/router';

const {sidebar} = s;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = ({className, ...props}:SidebarProps):JSX.Element => {
    const router = useRouter(); 
    console.log("(👍≖‿‿≖)👍 ✿ file: Sidebar.tsx ✿ line 11 ✿ Sidebar ✿ router", router)
    if(router.route.length < 12){
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

