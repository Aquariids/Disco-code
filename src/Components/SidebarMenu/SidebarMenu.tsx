import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import Menu from '../Menu/Menu';
import MenuJs from "../Menu/MenuJs/MenuJs";
import MenuTs from "../Menu/MenuTs/MenuTs";

const SidebarMenu = ():JSX.Element => {
    const router = useRouter();
    if (router.pathname.startsWith('/js')) {
        return (
            <nav className={s.nav_menu}>
                <MenuJs mobileMenuActive={false} sideBarMenuActive= {true}/>
            </nav>
        );
    }

    if (router.pathname.startsWith('/ts')) {
        return (
            <nav className={s.nav_menu}>
                <MenuTs sideBarMenuActive={true} mobileMenuActive={false}/>
            </nav>
        );
    }
    if (router.pathname.startsWith('/react')) {
        return (
            <nav className={s.nav_menu}>
                <Menu title="Базовые темы react" category='basicreact' dropdown={true} page='react'/>
            </nav>
        );
    }
    else {
        return (
            <></>
        );
    }

};

export default SidebarMenu;