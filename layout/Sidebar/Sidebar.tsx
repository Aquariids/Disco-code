import React from 'react';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.css';
import SidebarMenu from '../../src/Components/SidebarMenu/SidebarMenu';
import { useRouter } from 'next/router';

const {sidebar} = s;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = ({className, ...props}:SidebarProps):JSX.Element => {
    const router = useRouter(); 
    const r = router.asPath.split('/').length;
    

    if(router.asPath === '/docs/sitedocument') { // этой части на сайте нет, это для документации сайта
        return <div>
        <ul className={s.docs}>
        <h3 className={s.docsTitle}>Навигация</h3>
            <li>Api</li>
            <li>Pages</li>
            <li>Layout</li>
            <li>4</li>
            <li>5</li>
        </ul>
        </div>;
    }
    
    // тут уже идет сайт
    if(r <= 3){
        return(
            <></>
        );
    } 
     else {
        return (
            <div className={sidebar} {...props}>
                <SidebarMenu/>
                </div>
                
        );
    }
    
};

export default Sidebar;

