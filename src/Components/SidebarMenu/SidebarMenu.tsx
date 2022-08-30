import Link from 'next/link';
import React, { useContext } from 'react';
import { AppContext } from '../../../context/app.context';
import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import { ImenuList } from './SidebarMenu.props';

const SidebarMenu = (): JSX.Element => {

    const menuList: ImenuList[] = [
        { name: 'Базовый javaScript', id: 'basic_js' }
    ];
    const router = useRouter();
    const { posts, setMenu } = useContext(AppContext);
    const pathname = router.asPath;


    // const buildMenu = () => {
    //     return(
    //         <>
    //             {menuList.map(menu=>(
    //                 <div key={Math.random()}>
    //                     <a href=''>
    //                     </a>
    //                 </div>
    //             ))}
    //         </>
    //     );
    // }
    if (pathname.length > 5) {
        return (
            <div className={s.menu}>
                {posts && posts.map((post) => (
                        
                        <li style={{ listStyleType: 'none', }} key={Math.random()}>
                        <div style={{ fontSize: '19px', fontWeight: 400 }}><Link href={`${post.slug}`}>{post.title}</Link></div>
                    </li>
                    ))}

            </div>

        );
    } else {
        return (

            <div className={s.menu}>
                {posts && posts.map((post) => (<li style={{ listStyleType: 'none', }} key={Math.random()}>

                    <div style={{ fontSize: '19px', fontWeight: 400 }}><Link href={`${pathname}/${post.slug}`}>{post.title}</Link>
                    </div>

                </li>))}
                
            </div>

        );
    }

};

export default SidebarMenu;