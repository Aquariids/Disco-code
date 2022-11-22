import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import { useEffect } from "react";
import DropdownMenuJs from "../Menu/MenuJs/DropdownMenuJs";
import DropdownMenuNextJs from "../Menu/MenuNextJs/DropdownMenuNextJs";
import DropdownMenuTs from "../Menu/MenuTs/DropdownMenuTs";
import DropdownMenuReact from "../Menu/MenuReact/DropdownMenuReact";
import DropdownMenuParadigms from "../Menu/MenuParadigms/DropdownMenuParadigms";

const SidebarMenu = (): JSX.Element => {

    useEffect(() => {

        const activeHeight: number | undefined = document.querySelector('.active_scroll')?.clientHeight;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const activeLink: Element | any = document.querySelector('.active_scroll') as HTMLElement;
        const heightTop: number = activeLink?.offsetTop + activeHeight;

        if (activeLink != null && activeHeight != null) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any
            const menuHeight: number = document.querySelector(`.${s.nav_menu}`)!.clientHeight - 89;

            document.querySelector(`.${s.nav_menu}`)?.scrollBy(0, heightTop - menuHeight + 400);

        } else {
            alert('Технические неполадки с загрузкой сайдбара');
        }


    }, []);


    const router = useRouter();
    if (router.pathname.startsWith('/js')) {
        return (
            <nav className={s.nav_menu}>
                <DropdownMenuJs />
            </nav>
        );
    }

    if (router.pathname.startsWith('/ts')) {
        return (
            <nav className={s.nav_menu}>
                <DropdownMenuTs />
            </nav>
        );
    }
    if (router.pathname.startsWith('/react')) {
        return (
            <nav className={s.nav_menu}>
                <DropdownMenuReact />
            </nav>
        );
    }

    if (router.pathname.startsWith('/paradigms')) {
        return (
            <nav className={s.nav_menu}>
                <DropdownMenuParadigms />
            </nav>
        );
    }

    if (router.pathname.startsWith('/next-js')) {
        return (
            <nav className={s.nav_menu}>
                <DropdownMenuNextJs />
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