import Link from 'next/link';
import React, { useContext } from 'react';
import { AppContext } from '../../../context/app.context';
import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import { PostMeta } from '../../../pages/api/api';
import cn from 'classnames';


const SidebarMenu = ():JSX.Element  => {

    const router = useRouter();
    const { posts } = useContext(AppContext);
    const pathname = router.asPath;

    const buildMenuJs = (menu:(post:PostMeta,category:string,index:number)=> JSX.Element): JSX.Element => {
        return (
            <nav className={s.navMenu}>
                <div>
                    <button>Базовый javaScript</button>
                    <ul className={s.listMenu}>
                        {posts && posts.map((post, index) => (
                            <React.Fragment key={index}>
                                {menu(post, 'basicjs',index)}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                <div>
                    <button>Продвинутый javaScript</button>
                    <ul className={s.listMenu}>
                        {posts && posts.map((post, index) => (
                            <React.Fragment key={index}>
                                {menu(post, 'none',index)}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    };

    const buildMenuGrid = (menu:(post:PostMeta,category:string,index:number)=> JSX.Element): JSX.Element => {
        return (
            <div className={s.navMenu}>
                {posts && posts.map((post,index) => (
                    <React.Fragment key={index}>
                        {menu(post, 'grid',index)}
                    </React.Fragment>

                ))}
            </div>
        );
    };
    const buildLink = (post: PostMeta, category: string,index:number): JSX.Element => {
        if (pathname.length > 5) {
            return (
                            <li 
                            className={cn({
                                [s.active]: pathname.replace(post.slug, '') + post.slug == pathname,
                                [s.link]:pathname.replace(post.slug, '') + post.slug !== pathname,
                                [s.show]: post.category == category,
                                [s.hide]: post.category !== category,
                            })} >
                        <Link className={cn('lox')} href={`${post.slug}`}>{post.title}</Link>
                        </li>

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
                {buildMenuJs(buildLink)}
            </>
        );
    }

    if (router.pathname === '/grid/[grid]') {
        return (
            <>
                {buildMenuGrid(buildLink)}
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