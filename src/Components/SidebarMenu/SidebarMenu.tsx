import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import MenuJs from "../Menu/MenuJs/MenuJs";
import MenuTs from "../Menu/MenuTs/MenuTs";
import MenuReact from "../Menu/MenuReact/MenuReact";
import MenuParadigms from "../Menu/MenuParadigms/MenuParadigms";
import { useEffect } from "react";
import MenuNextJs from "../Menu/MenuNextJs/MenuNextJs";

const SidebarMenu = ():JSX.Element => {

    useEffect(()=> {
    const activeHeight:number | undefined = document.querySelector('.active_scroll')?.clientHeight;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const activeLink:Element | any = document.querySelector('.active_scroll') as HTMLElement;
    const heightTop:number = activeLink?.offsetTop + activeHeight;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any
    const menuHeight:number = document.querySelector(`.${s.nav_menu}`)!.clientHeight - 89;
        if(heightTop > menuHeight) {

            document.querySelector(`.${s.nav_menu}`)?.scrollBy(0,heightTop + menuHeight);

        }  else {
            document.querySelector(`.${s.nav_menu}`)?.scrollBy(heightTop,  heightTop - (menuHeight * 2) );
        }
        
    
  });
    const router = useRouter();
    if (router.pathname.startsWith('/js')) {
        return (
            <nav className={s.nav_menu}>
                <MenuJs sideBarMenuActive= {true} mobileMenuActive={false} />
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
                <MenuReact sideBarMenuActive={true} mobileMenuActive={false}/>
            </nav>
        );
    }

    if (router.pathname.startsWith('/paradigms')) {
        return (
            <nav className={s.nav_menu}>
                <MenuParadigms sideBarMenuActive={true} mobileMenuActive={false}/>
            </nav>
        );
    }

    if (router.pathname.startsWith('/nextjs')) {
        return (
            <nav className={s.nav_menu}>
                <MenuNextJs sideBarMenuActive={true} mobileMenuActive={false}/>
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