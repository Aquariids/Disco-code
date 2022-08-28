import Link from 'next/link';
import React, { useContext } from 'react';
import { AppContext } from '../../../context/app.context';
import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';

const SidebarMenu = (): JSX.Element => {
    const router = useRouter();
    const { posts } = useContext(AppContext);
    const pathname = router.asPath;
    
    if (pathname.length > 5) {
        return (
            <div className={s.menu}>
                {posts && posts.map((post) => (<li style={{ listStyleType: 'none', }} key={Math.random()}>

                    <div style={{ fontSize: '19px', fontWeight: 400 }}><Link href={`${post.slug}`}>{post.title}</Link></div>
                </li>))}

            </div>

        );
    } else {
        return (

            <div className={s.menu}>

                {posts && posts.map((post) => ( <li style={{ listStyleType: 'none', }} key={Math.random()}>

                    <div style={{ fontSize: '19px', fontWeight: 400 }}><Link href={`${pathname}/${post.slug}`}>{post.title}</Link>
                    </div>

                </li>))}

            </div>

        );
    }

};

export default SidebarMenu;