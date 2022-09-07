import Link from 'next/link';
import React, { useContext,useState } from 'react';
import s from './Menu.module.css';
import cn from 'classnames';
import { IMenu } from './Menu.props';
import { useRouter } from 'next/router';
import Button from '../UI/Button/Button';
import { AppContext } from '../../../context/app.context';



const Menu = ({title,category, dropdown, ...props}:IMenu): JSX.Element => {
  
    const router = useRouter();
    const pathname = router.asPath;
    const { posts } = useContext(AppContext); 

  
    const [isOpen, setOpen] = useState(router.pathname.startsWith(`/js/${category}`) == true? true: false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };
    

    if(dropdown === true) {
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
                                [s.active]: pathname.replace(post.slug, '') + post.slug === pathname,
                                [s.link]: pathname.replace(post.slug, '') + post.slug !== pathname,
                                [s.show]: post.category == category,
                                [s.hide]: post.category !== category,
                            })} >
                                <Link href={`/js/${post.category}/${post.slug}`}>{post.title}</Link>
                            
                        </li>
                    ))}
                </ul>)}
            </div>
        );
    } else {
        return (
            <div className={s.content} {...props}>
                <div className={s.btn}>
                <h4 className={s.title}
                >{title}</h4>
                </div>
                    <ul className={s.listMenu}>
                    {posts && posts.map((post,index) => (
                        <li 
                        key={index}
                            className={cn({
                                [s.active]: pathname.replace(post.slug, '') + post.slug === pathname,
                                [s.link]: pathname.replace(post.slug, '') + post.slug !== pathname,
                                [s.show]: post.category == category,
                                [s.hide]: post.category !== category,
                            })} >
                                <Link href={`/js/${post.category}/${post.slug}`}>{post.title}</Link>
                            
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    
};

export default Menu;