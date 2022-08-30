import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../../context/app.context';
import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import { ImenuList } from './SidebarMenu.props';



const SidebarMenu = (): JSX.Element => {

    const router = useRouter();
    const { posts } = useContext(AppContext);
    console.log("(👍≖‿‿≖)👍 ✿ file: SidebarMenu.tsx ✿ line 14 ✿ SidebarMenu ✿ posts", posts)

    
    const pathname = router.asPath;
    console.log("(👍≖‿‿≖)👍 ✿ file: SidebarMenu.tsx ✿ line 18 ✿ SidebarMenu ✿ pathname", pathname)

    
    // const slug = ({path}:any):string => {
    //     return path.replace();
    // };
    const buildMenu = ():JSX.Element => {

        if (pathname.length > 5) {
        return (
            <div className={s.menu}>
                {posts && posts.map((post) => (
                        <ul key={Math.random()}>
                        <li className={pathname === post.active ? `${s.active}`: `${s.link}`}>
                            <Link href={`${post.slug}`}>{post.title}</Link>
                        </li>
                    </ul>
                    ))}

            </div>

        );
    } else {
        return (

            <div className={s.menu}>
                {posts && posts.map((post) => (
                        <ul key={Math.random()}>
                        <li className={pathname === post.active ? `${s.active}`: `${s.link}`}>
                            <Link href={`${pathname}/${post.slug}`}>{post.title}</Link>
                        </li>
                    </ul>
                    ))}
                
            </div>

        );
    }
        
    };


    return(
        <>
                {buildMenu()}
        </>
    );
    
    

};

export default SidebarMenu;