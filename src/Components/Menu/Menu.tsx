import Link from 'next/link';
import React, { useContext,useState } from 'react';
import s from './Menu.module.css';
import cn from 'classnames';
import { IMenu } from './Menu.props';
import { useRouter } from 'next/router';
import Button from '../UI/Button/Button';
import { AppContext } from '../../../context/app.context';


const Menu = ({title,category, dropdown, page,  ...props}:IMenu): JSX.Element => {

    const router = useRouter();
    const pathname = router.asPath;
    const { posts } = useContext(AppContext); 

    const [isOpen, setOpen] = useState(router.pathname.startsWith(`/${page}/${category}`) == true? true: false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };
    

    if(dropdown === true) {
        posts.sort((a,b) => a.id - b.id);

        return (
            <div className={s.content} {...props}>
                <div className={s.btn}>
                <Button
                    arrow= {isOpen === true? 'down': 'right'}
                    onClick={handleToggle}
                >{title}</Button>
                </div>
                {isOpen && (<ul className={s.listMenu}>
                    {posts && posts.map((post,index) => (
                        
                        <li 
                        key={index}
                            className={cn({
                                [s.active_js]: pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/js'),
                                [s.active_ts]: pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/ts'),
                                [s.active_react]: pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/react'),
                                [s.link]: pathname.replace(post.slug, '') + post.slug !== pathname,
                                [s.show]: post.category == category,
                                [s.hide]: post.category !== category,
                            })} >

                                {router.pathname.startsWith(`/${page}`)?<Link  href={`/${page}/${post.category}/${post.slug}`}>{post.title}</Link>:''}
                            
                        </li>
                    ))}
                </ul>)}
            </div>
        );
    }  

    else {
        posts.sort((a,b) => a.id - b.id);

        return (
            <div className={s.content} {...props}>
                <div className={s.index_btn}>
                <h4 className={s.title}
                >{title}</h4>
                </div>
                    <ul className={s.index_list_menu}>
                    {posts && posts.map((post,index) => (
                        <li 
                        key={index}
                            className={cn({
                                [s.active]: pathname.replace(post.slug, '') + post.slug === pathname,
                                [s.link]: pathname.replace(post.slug, '') + post.slug !== pathname,
                                [s.show]: post.category == category,
                                [s.hide]: post.category !== category,
                            })} >
                                {router.pathname.startsWith(`/${page}`)?<Link href={`/${page}/${post.category}/${post.slug}`}>{post.title}</Link>:''}

                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    
};

export default Menu;