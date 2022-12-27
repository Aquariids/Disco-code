import Link from 'next/link';
import React, { useContext, } from 'react';
import s from './Menu.module.scss';
import cn from 'classnames';
import { IMenu } from './Menu.props';
import { useRouter } from 'next/router';
import { MobileContext } from '../../../context/app.context';


const MenuMobileLinks = ({ title, page, posts, ...props }: IMenu): JSX.Element => {
    posts && posts.sort((a, b) => a.id - b.id);
    const router = useRouter();
    const pathname = router.asPath.split('#')[0]; // если мы переходим по ссылке с якорем куда то, к статье какой нибудь, то активная ссылка будет немного ломаться, поэтому если есть якорь мы его убираем.
    const checkActiveLink = pathname.split('/')[pathname.split('/').length - 1]; // отрезаем от пути наш slug и будем проверять slug из api, и так будет кидать активную ссылку

    const { propsMobile } = useContext(MobileContext);
    const [mobileTrue, setMobile] = propsMobile;


    const hideModalAfterTransition = () => {
        router.events.on('routeChangeComplete', () => {
            setMobile(!mobileTrue);
        });
    };

    // mobile modal menu
    return (
        <div className={s.mobile_menu} {...props}>
            <div className={s.mobile_menu__btn}>
                <h4 className={s.mobile_menu__title}
                >{title}</h4>
            </div>
            <ul className={s.mobile_menu__list}>
                {posts && posts.map((post, index: number) => (
                    <li
                        onClick={hideModalAfterTransition}
                        key={post.id ?? index}
                        className={cn(s.link, {
                            [s.active]: post.slug === checkActiveLink,
                            ['active_scroll']: post.slug === checkActiveLink,
                            [s.active_js]: post.slug === checkActiveLink && router.pathname.startsWith('/js'),
                            [s.active_ts]: post.slug === checkActiveLink && router.pathname.startsWith('/ts'),
                            [s.active_react]: post.slug === checkActiveLink && router.pathname.startsWith('/react'),
                            [s.active_node]: post.slug === checkActiveLink && router.pathname.startsWith('/node-js'),
                            
                        })} >
                        {router.pathname.startsWith(`/${page}`) ? <Link href={`/${page}/${post.category}/${post.slug}`}>{post.title}</Link> : ''}
                    </li>
                ))}
            </ul>
        </div>
    );



};

export default MenuMobileLinks;