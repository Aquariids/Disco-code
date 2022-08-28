import Link from 'next/link';
import React, { useContext } from 'react';
import { AppContext } from '../../../context/app.context';
import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import js from '../../../pages/js';
const SidebarMenu = (): JSX.Element => {
    const router = useRouter();
    console.log("(👍≖‿‿≖)👍 ✿ file: SidebarMenu.tsx ✿ line 9 ✿ SidebarMenu ✿ router", router)
    const { posts } = useContext(AppContext);
    const pathname = router.asPath;

    const urlName = {
        js:'/js',
        grid:'/grid',
        nextJs:'/nextjs',
        ts:'/ts',
        react:'/react',
    };


const {js,grid,ts,nextJs,react} = urlName;

console.log(router.asPath === js || grid || ts || nextJs || react);

    
    if (router.asPath === js && grid && ts && nextJs && react) {
        return (
            <div className={s.menu}>

                {posts && posts.map((post) => (<li style={{ listStyleType: 'none', }} key={Math.random()}>

                    <div style={{ fontSize: '19px', fontWeight: 400 }}><Link href={`${pathname}/${post.slug}`}>{post.title}</Link></div>
                </li>))}

            </div>

        );
    } else {
        return (

            <div className={s.menu}>

                {posts && posts.map((post) => ( <li style={{ listStyleType: 'none', }} key={Math.random()}>

                    <div style={{ fontSize: '19px', fontWeight: 400 }}><Link href={`${post.slug}`}>{post.title}</Link>
                    </div>

                </li>))}

            </div>

        );
    }

};

export default SidebarMenu;