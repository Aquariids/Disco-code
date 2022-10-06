import Link from 'next/link';
import React, {useContext,useState } from 'react';
import s from './Menu.module.css';
import cn from 'classnames';
import { IMenu } from './Menu.props';
import { useRouter } from 'next/router';
import Button from '../UI/Button/Button';
import { AppContext } from '../../../context/app.context';


const Menu = ({title,category, dropdown, page, mobileMenu, setMobile,mobileTrue,  ...props}:IMenu): JSX.Element => {

    const [fullMenu, setFullMenu] = useState(false);

   const openFullMenu = () => {
    setFullMenu(!fullMenu);
   };
    const router = useRouter();
    const pathname = router.asPath;
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
                            className={cn('scroll', {
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
                </ul>
                </div>
            
        );
    }
    else {
        
      

                  
        
        return (
            <>
            <div className={s.btnOpenContent}>
            {/* <button onClick={openFullMenu}> Нажми еблан</button> */}
            </div>
            <div className={s.content} {...props}>
                <div className={s.index_btn}>
                <h4 className={s.title}
                >{title}</h4>
                </div>
                <div className={cn( {
                    // [s.openAllContent]: fullMenu === true,
                    // [s.closeAllContent]: fullMenu === false,
                    // [s.allContent]: 

                    
                })}>
                    <ul className={s.index_list_menu}>
                    {posts && posts.map((post,index) => (
                        <li 
                            key={index}
                            className={cn( s.subCard,{
                                [s.subCardJs]: pathname.startsWith('/js'),
                                [s.subCardTs]: pathname.startsWith('/ts'),
                                [s.subCardReact]: pathname.startsWith('/react'),

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
                
            </div>
            
            </>
        );
    }

    
};

export default Menu;