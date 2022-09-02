import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../../context/app.context';
import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import { PostMeta } from '../../../pages/api/api';
import cn from 'classnames';

const SidebarMenu = (): JSX.Element => {
   
    const router = useRouter();
    const { posts } = useContext(AppContext);
    const pathname = router.asPath;


    const buildMenuJs = (menu: (post: PostMeta, category: string) => JSX.Element): JSX.Element => {

        const buildBasicJs = () => {
            const [isOpen, setOpen] = useState(false);
            const handleToggle = () => {
                setOpen(!isOpen);
                
            };
            
            return (
                <>
                <button
                        type="button"
                        className={cn(s.button, {
                            [s.activeBtn]: isOpen === true,
                        })}
                        onClick={handleToggle}
                    >Базовый javaScript</button>
                    {isOpen && (
                        <div className={s.dropdown}>
                            <ul className={s.listMenu}>
                        {posts && posts.map((post, index) => (
                            <React.Fragment key={index}>
                                {menu(post, 'basicjs')}
                            </React.Fragment>
                        ))}
                    </ul>
                        </div>
                    )}
                </>
            );
        };



        const buildAdvancedJs = () => { 
            const myRef = useRef();

            useEffect(()=>{
                console.log(myRef);
                
              });
            const [isOpen, setOpen] = useState(false);
            const handleToggle = () => {
                setOpen(!isOpen);
                
            };

            return(
                <>
                <button
                        type="button"
                        className={cn(s.button,{
                            [s.activeBtn]: isOpen === true,

                        })}
                        onClick={handleToggle}
                    >Продвинутый javaScript</button>
                    {isOpen && (
                        <div
                        className={s.dropdown}>
                            <ul className={s.listMenu}>
                        {posts && posts.map((post, index) => (
                            <React.Fragment key={index}>
                                {menu(post, 'none')}
                            </React.Fragment>
                        ))}
                    </ul>
                        </div>
                    )}
                </>
            )

        };
        return (
            <nav className={s.navMenu}>
                <div>
                    {buildBasicJs()}
                </div>
                <div>
                    {buildAdvancedJs()}
                </div>
            </nav>
        );
    };

    const buildMenuGrid = (menu: (post: PostMeta, category: string) => JSX.Element): JSX.Element => {
    
        return (
            <div className={s.navMenu}>
                {posts && posts.map((post, index) => (
                    <React.Fragment key={index}>
                        {menu(post, 'grid')}
                    </React.Fragment>

                ))}
            </div>
        );
    };
    const buildLink = (post: PostMeta, category: string): JSX.Element => {
        if (pathname.length > 5) {
            
            return (
                <li 
                    className={cn({
                        [s.active]: pathname.replace(post.slug, '') + post.slug == pathname,
                        [s.link]: pathname.replace(post.slug, '') + post.slug !== pathname,
                        [s.show]: post.category == category,
                        [s.hide]: post.category !== category,
                    })} >
                    <Link href={`${post.slug}`}>{post.title}</Link>
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