import Link from 'next/link';
import React, { useContext,useState } from 'react';
import { AppContext } from '../../../../context/app.context';
import s from './Menu.module.css';
import cn from 'classnames';
import { IMenu } from './Menu.props';
import { useRouter } from 'next/router';



const Menu = ({title,category,...props}:IMenu): JSX.Element => {
  
    const router = useRouter();
    const pathname = router.asPath;
    const { posts } = useContext(AppContext); 

  
    const [isOpen, setOpen] = useState(router.pathname.startsWith(`/js/${category}`) == true? true: false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };
    
    return (
        <div {...props}>
            <button
                type="button"
                className={cn(s.button, {
                    [s.activeBtn]: isOpen === true,
                })}
                onClick={handleToggle}
            >{title}</button>
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
};

export default Menu;