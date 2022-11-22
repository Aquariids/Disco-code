import Link from 'next/link';
import React, { useState } from 'react';
import s from './Menu.module.css';
import cn from 'classnames';
import { IMenu } from './Menu.props';
import { useRouter } from 'next/router';
import Button from '../UI/Button/Button';


const Menu = ({ title, category, dropdown, page, mobileMenu, setMobile, mobileTrue, posts, ...props }: IMenu): JSX.Element => {

    const sortPostsByLevel = () => {
        posts && posts.sort((a, b) => a.id - b.id);
    };

    sortPostsByLevel();

    const router = useRouter();
    const pathname = router.asPath.split('#')[0]; // если мы переходим по ссылке с якорем куда то, к статье какой нибудь, то активная ссылка будет немного ломаться, поэтому если есть якорь мы его убираем.
    const checkActiveLink = pathname.split('/')[pathname.split('/').length - 1]; // отрезаем от пути наш slug и будем проверять slug из api, и так будет кидать активную ссылку
    const [isOpen, setOpen] = useState(router.pathname.startsWith(`/${page}/${category}`) == true ? true : false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };

    const hideModalAfterTransition = () => {
        router.events.on('routeChangeComplete', () => {
            setMobile(!mobileTrue);
        });
    };

    // sidebar
    if (dropdown === true) {
        return (
            <div className={s.content} {...props}>
                <div className={s.btn}>
                    <Button
                        arrow={isOpen === true ? 'down' : 'up'}
                        onClick={handleToggle}
                    >{title}</Button>
                </div>
                {isOpen && (<ul className={s.listMenu}>
                    {posts && posts.map((post, index: number) => (
                        <li
                            key={index}
                            className={cn(s.link, {
                                [s.active]: post.slug === checkActiveLink,
                                ['active_scroll']: post.slug === checkActiveLink,
                                [s.active_js]: post.slug === checkActiveLink && router.pathname.startsWith('/js'),
                                [s.active_ts]: post.slug === checkActiveLink && router.pathname.startsWith('/ts'),
                                [s.active_react]: post.slug === checkActiveLink && router.pathname.startsWith('/react'),
                            })} >
                            {router.pathname.startsWith(`/${page}`) ? <Link href={`/${page}/${post.category}/${post.slug}`}>{post.title}</Link> : ''}
                        </li>
                    ))}
                </ul>)}
            </div>
        );
    }

    // mobile modal menu
    else if (mobileMenu === true) {
        return (
            <div className={s.mobile_content} {...props}>
                <div className={s.mobile_btn}>
                    <h4 className={s.title_mobile}
                    >{title}</h4>
                </div>
                <ul className={s.mobile_list}>
                    {posts && posts.map((post, index: number) => (
                        <li
                            onClick={hideModalAfterTransition}
                            key={index}
                            className={cn(s.link, {
                                [s.active]: post.slug === checkActiveLink,
                                ['active_scroll']: post.slug === checkActiveLink,
                                [s.active_js]: post.slug === checkActiveLink && router.pathname.startsWith('/js'),
                                [s.active_ts]: post.slug === checkActiveLink && router.pathname.startsWith('/ts'),
                                [s.active_react]: post.slug === checkActiveLink && router.pathname.startsWith('/react'),
                            })} >
                            {router.pathname.startsWith(`/${page}`) ? <Link href={`/${page}/${post.category}/${post.slug}`}>{post.title}</Link> : ''}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    // main content page
    else {
        return (
            <>
                <div className={s.content} {...props}>
                    <div className={s.content_btn}>
                        <h4 className={s.title}
                        >{title}</h4>
                    </div>
                    <ul className={s.content_list_menu}>
                        {posts && posts.map((post, index: number) => (
                            <li
                                key={index}
                                className={cn(s.link, s.content_links)} >
                                {router.pathname.startsWith(`/${page}`) ? <Link href={`/${page}/${post.category}/${post.slug}`}>{post.title}</Link> : ''}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }


};

export default Menu;