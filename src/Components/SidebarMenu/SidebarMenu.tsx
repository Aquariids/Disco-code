import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import Menu from './Menu/Menu';

const SidebarMenu = (): JSX.Element => {
    const router = useRouter();
    console.log("(👍≖‿‿≖)👍 ✿ file: SidebarMenu.tsx ✿ line 7 ✿ SidebarMenu ✿ router", )
    if (router.pathname.startsWith('/js')) {
        return (
            <nav className={s.navMenu}>
                <Menu title="Базовый JavaScript" category='basicjs' />
                <Menu title="Продвинутый JavaScript" category='advancedjs' />
            </nav>
        );
    }

    if (router.pathname.startsWith('/grid')) {
        return (
            <>
            <nav className={s.navMenu}>
                <Menu title="Гриды" category='grid'/>
            </nav>
            </>
        );
    }
    else {
        return (
            <></>
        );
    }

};

export default SidebarMenu;