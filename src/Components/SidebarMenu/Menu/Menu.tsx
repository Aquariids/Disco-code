import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../../../context/app.context';
import { useRouter } from "next/router";
import s from './SidebarMenu.module.css';
import { PostMeta } from '../../../../pages/api/api';
import cn from 'classnames';



interface IMenuJs {
    title:string,
    category:string,
    pathname:string,
}
const BasicMenuJs = ({title,category,pathname}:IMenuJs): JSX.Element => {

    const { posts } = useContext(AppContext);

    const [isOpen, setOpen] = useState(true);
    const handleToggle = () => {
        setOpen(!isOpen);
    };

    return (
        <div>
            <button
                type="button"
                className={cn(s.button, {
                    [s.activeBtn]: isOpen === true,
                })}
                onClick={handleToggle}
            >{title}</button>

            {isOpen && (<ul className={s.listMenu}>
                {posts && posts.map((post:PostMeta,index:number) => (
                    <li key={index}
                        className={cn({
                            [s.active]: pathname.replace(post.slug, '') + post.slug == pathname,
                            [s.link]: pathname.replace(post.slug, '') + post.slug !== pathname,
                            [s.show]: post.category == category,
                            [s.hide]: post.category !== category,
                        })} >
                        <Link href={`${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>)}
        </div>
    );
};

export default BasicMenuJs;