import React from 'react';
import { SidebarProps } from './Sidebar.props';
import s from './Sidebar.module.css';
import SidebarMenu from '../../src/Components/SidebarMenu/SidebarMenu';
import { useRouter } from 'next/router';

const {sidebar} = s;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = ({className, ...props}:SidebarProps):JSX.Element => {
    const router = useRouter(); 
    const r = router.asPath;
        
    const errorPaths = r === '/js/basicjs' || r === '/' || r === '/ts/basicts' || r === '/react/basicreact' || r === '/next'; 

    if(r.length < 11 || errorPaths){
        return(
            <></>
        );
    } if(r === '/docs/sitedocument') {
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
     else {
        return (
            <div className={sidebar} {...props}>
                <SidebarMenu/>
                </div>
                
        );
    }
    
};

export default Sidebar;

