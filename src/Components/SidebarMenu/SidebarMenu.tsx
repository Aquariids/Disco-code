import Link from 'next/link';
import React, { useContext } from 'react';
import { AppContext } from '../../../context/app.context';
import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import { PostMeta } from '../../../pages/api/api';



const SidebarMenu = ():JSX.Element  => {

    const router = useRouter();
    const { posts } = useContext(AppContext);
    const pathname = router.asPath;

    const buildFirstMenuJs = (menu:(post:PostMeta,category:string)=> JSX.Element): JSX.Element => {
        return (
            <nav className={s.firstMenu}>
                <div>
                    <button>Базовый javaScript</button>
                    <ul className={s.menu}>
                        {posts && posts.map((post, index) => (
                            <li className={pathname.replace(post.slug, '') + post.slug == pathname ? `${s.active}` : `${s.link}`} key={index}> 
                                {menu(post, 'basicjs')}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button>Продвинутый javaScript</button>
                    <ul className={s.menu}>
                        {posts && posts.map((post, index) => (
                            <li className={pathname.replace(post.slug, '') + post.slug == pathname ? `${s.active}` : `${s.link}`} key={index}>
                                {menu(post, 'none')}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    };

    const buildFirstMenuGrid = (menu:(post:PostMeta,category:string)=> JSX.Element): JSX.Element => {
        return (
            <div className={s.firstMenu}>
                {posts && posts.map((post) => (
                    <li>
                        {menu(post, 'grid')}
                    </li>

                ))}
            </div>
        );
    };
    const buildLink = (post: PostMeta, category: string): JSX.Element => {
        if (pathname.length > 5) {
            return (
                <span className={post.category == category ? `${s.show}` : `${s.hide}`} >
                        <Link href={`${post.slug}`}>{post.title}</Link>
                </span>

            );
        } else {
            return (
                <></>
            );
        }

    };


    if (router.pathname === '/js/[js]') {
        return (
            <>
                {buildFirstMenuJs(buildLink)}
            </>
        );
    }

    if (router.pathname === '/grid/[grid]') {
        return (
            <>
                {buildFirstMenuGrid(buildLink)}
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