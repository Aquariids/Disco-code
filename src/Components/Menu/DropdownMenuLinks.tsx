import Link from 'next/link';
import React, { useState } from 'react';
import s from './Menu.module.scss';
import cn from 'classnames';
import { IMenu } from './Menu.props';
import { useRouter } from 'next/router';
import Button from '../UI/Button/Button';


const DropdownMenuLinks = ({ title, category, page,  posts, ...props }: IMenu): JSX.Element => {
    posts && posts.sort((a, b) => a.id - b.id);



    const router = useRouter();
    const pathname = router.asPath.split('#')[0]; // если мы переходим по ссылке с якорем куда то, к статье какой нибудь, то активная ссылка будет немного ломаться, поэтому если есть якорь мы его убираем.
    const checkActiveLink = pathname.split('/')[pathname.split('/').length - 1]; // отрезаем от пути наш slug и будем проверять slug из api, и так будет кидать активную ссылку
    const [isOpen, setOpen] = useState(router.pathname.startsWith(`/${page}/${category}`) == true ? true : false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };


    // sidebar
        return (
            <div className={s.dropdown_menu} {...props}>
                <div className={s.dropdown_menu__btn}>
                    <Button
                        arrow={isOpen === true ? 'down' : 'up'}
                        onClick={handleToggle}
                    >{title}</Button>
                </div>
                {isOpen && (<ul className={s.dropdown_menu__list}>
                    {posts && posts.map((post, index: number) => (
                        <li
                            key={post.id ?? index}
                            className={cn(s.link, {
                                [s.active]: post.slug === checkActiveLink,
                                ['active_scroll']: post.slug === checkActiveLink, // это надо, что бы к ссылке подкручивать скролл в сайдбаре
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


};

export default DropdownMenuLinks;