import Link from 'next/link';
import React, {useContext,useState } from 'react';
import s from './Menu.module.css';
import cn from 'classnames';
import { IMenu } from './Menu.props';
import { useRouter } from 'next/router';
import Button from '../UI/Button/Button';
import { AppContext } from '../../../context/app.context';


const Menu = ({title,category, dropdown, page, mobileMenu, setMobile,mobileTrue,  ...props}:IMenu): JSX.Element => {

    const router = useRouter();
    const pathname = router.asPath.split('#')[0]; // если мы переходим по ссылке с якорем куда то, к статье какой нибудь, то активная ссылка будет немного ломаться, поэтому если есть якорь мы его убираем.
    
    const { posts } = useContext(AppContext);
    
    posts && posts.sort((a,b) => a.id - b.id);


    const [isOpen, setOpen] = useState(router.pathname.startsWith(`/${page}/${category}`) == true? true: false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };
    
    const mob = () => {
        router.events.on('routeChangeComplete', ()=> {
                setMobile(!mobileTrue);
        });
    };
    if(dropdown === true) {
        return (
            <div className={s.content} {...props}>
                <div className={s.btn}>
                <Button
                    arrow= {isOpen === true? 'down': 'up'}
                    onClick={handleToggle}
                >{title}</Button>
                </div>
                {isOpen && (<ul className={s.listMenu}>
                    {posts && posts.map((post,index) => (
                        
                        <li 
                        key={index}
                            className={cn(s.link, {
                                [s.active]: pathname.replace(post.slug, '') + post.slug === pathname,
                                [s.active_js]: pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/js'),
                                [s.active_ts]: pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/ts'),
                                [s.active_react]: pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/react'),
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

    else if (mobileMenu === true) {

        return(
            <div className={s.mobile_content} {...props}>
                <div className={s.mobile_btn}>
                <h4 className={s.titleMobile}
                >{title}</h4>
                </div>
                
                <ul className={s.mobile_list}>
                    {posts && posts.map((post,index) => (
                        <li 
                        onClick={mob}
                        key={index}
                            className={cn(s.link,{
                                [s.active]: pathname.replace(post.slug, '') + post.slug === pathname,

                                [s.active_js]: pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/js'),
                                [s.active_ts]: pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/ts'),
                                [s.active_react]: pathname.replace(post.slug, '') + post.slug === pathname && router.pathname.startsWith('/react'),
                                [s.show]: post.category == category,
                                [s.hide]: post.category !== category,
                            })} >

                                {router.pathname.startsWith(`/${page}`)?<Link  href={`/${page}/${post.category}/${post.slug}`}>{post.title}</Link>:''}
                            
                        </li>
                    ))}
                </ul>
                </div>
            
        );
    }
    else {
        
        
        return (
            <>
            <div className={s.content} {...props}>
                <div className={s.index_btn}>
                <h4 className={s.title}
                >{title}</h4>
                </div>

                    <ul className={s.index_list_menu}>
                    {posts && posts.map((post,index) => (
                        <li 
                            key={index}
                            className={cn( s.link,s.subCard,{
                                [s.subCardJs]: pathname.startsWith('/js'),
                                [s.subCardTs]: pathname.startsWith('/ts'),
                                [s.subCardReact]: pathname.startsWith('/react'),

                                [s.active]: pathname.replace(post.slug, '') + post.slug === pathname,
                                [s.show]: post.category == category,
                                [s.hide]: post.category !== category,
                            })} >
                                {router.pathname.startsWith(`/${page}`)?<Link href={`/${page}/${post.category}/${post.slug}`}>{post.title}</Link>:''}

                        </li>
                    ))}
                </ul>
             
                </div>
            
            </>
        );
    }

    
};

export default Menu;