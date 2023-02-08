import Link from 'next/link';
import s from './Menu.module.scss';
import cn from 'classnames';
import { IMenu } from './Menu.props';
import { useRouter } from 'next/router';


const MenuMainLinks = ({ title, page,  posts, ...props }: IMenu): JSX.Element => {
    const router = useRouter();
    posts && posts.sort((a, b) => a.id - b.id);


    // main content page
        return (
            <>
                <div className={s.main_menu} {...props}>
                    <div className={s.main_menu__btn}>
                        <h4 className={s.main_menu__title}
                        >{title}</h4>
                    </div>
                    <ul className={s.main_menu__list}>
                        {posts && posts.map((post, index: number) => (
                            <li
                                key={post.id ?? index}
                                className={cn(s.link, s.main_menu__links)} >
                                {router.pathname.startsWith(`/content/${page}`) && <Link href={`/content/${page}/${post.category}/${post.slug}`}>{post.title}</Link>}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );

};

export default MenuMainLinks;