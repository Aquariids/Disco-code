import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import Menu from '../Menu/Menu';

const SidebarMenu = ():JSX.Element => {
    const router = useRouter();
    if (router.pathname.startsWith('/js')) {
        return (
            <nav className={s.nav_menu}>
                <div className={s.basicJsBtn}>
                <Menu title="Базовый JavaScript" category='basicjs' dropdown={true}  page='js' />
                </div>
                <Menu title="Продвинутый JavaScript" category='advancedjs' dropdown ={true} page='js' />

            </nav>
        );
    }

    if (router.pathname.startsWith('/ts')) {
        return (
            <nav className={s.nav_menu}>
                <Menu title="TypeScript" category='basicts' dropdown={true} page='ts'/>
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