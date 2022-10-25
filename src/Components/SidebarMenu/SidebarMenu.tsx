import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import MenuJs from "../Menu/MenuJs/MenuJs";
import MenuTs from "../Menu/MenuTs/MenuTs";
import MenuReact from "../Menu/MenuReact/MenuReact";
import MenuParadigms from "../Menu/MenuParadigms/MenuParadigms";
import { useEffect } from "react";

const SidebarMenu = ():JSX.Element => {

    useEffect(()=> {
    // eslint-disable-next-line prefer-const
    let h:number = document.querySelector('.active')?.clientHeight;

    let heightTop:number = document.querySelector('.active').offsetTop + h;

    let menuHeight = document.querySelector('.nav_menu')?.clientHeight - 90;
        if(heightTop < menuHeight) {

            document.querySelector('.nav_menu')?.scrollBy( heightTop, 0)

            
            
        } else {
            document.querySelector('.nav_menu')?.scrollBy(0,heightTop - menuHeight)

        }
    
    
    
  });
    const router = useRouter();
    if (router.pathname.startsWith('/js')) {
        return (
            <nav className={'nav_menu'}>
                <MenuJs sideBarMenuActive= {true} mobileMenuActive={false} />
            </nav>
        );
    }

    if (router.pathname.startsWith('/ts')) {
        return (
            <nav className={'nav_menu'}>
                <MenuTs sideBarMenuActive={true} mobileMenuActive={false}/>
            </nav>
        );
    }
    if (router.pathname.startsWith('/react')) {
        return (
            <nav className={'nav_menu'}>
                <MenuReact sideBarMenuActive={true} mobileMenuActive={false}/>
            </nav>
        );
    }

    if (router.pathname.startsWith('/paradigms')) {
        return (
            <nav className={'nav_menu'}>
                <MenuParadigms sideBarMenuActive={true} mobileMenuActive={false}/>
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