import React from 'react';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.scss';
import SidebarMenu from '../../src/Components/SidebarMenu/SidebarMenu';
import { useRouter } from 'next/router';
import cn from 'classnames';
import MenuDocs from '../../src/Components/Menu/MenuDocs/MenuDocs';

const Sidebar = ({className, ...props}:SidebarProps):JSX.Element => {
    const router = useRouter(); 
    const r = router.asPath.split('/').length;
    
    
    if(router.asPath.startsWith('/docs')) { // этой части на сайте нет, это для документации сайта
        return <MenuDocs/>;
    }
    if(router.asPath.startsWith('/tests')) {
        return(<></>);
    }

    if(r <= 4){
        return(
            <></>
        );
    } 
    
    else {
        return (
            <div className={cn(className, s.sidebar)} {...props}>
                <SidebarMenu/>
                </div>
                
        );
    }
    
};

export default Sidebar;

