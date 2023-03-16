import Link from 'next/link';
import s from './Menu.module.scss';
import cn from 'classnames';
import { IMenu } from './Menu.props';
import { useRouter } from 'next/router';
import AnimationContainer from '../AnimationContainers/AnimationContainer';


const MenuMainLinks = ({ title, page,  posts, ...props }: IMenu): JSX.Element => {
    const router = useRouter();
    posts && posts.sort((a, b) => a.id - b.id);
    
    

    // main content page
        return (
            <>
                <div className={s.main_menu} {...props}>
                <AnimationContainer>
                    <ol className={s.main_menu__list}>
                        {posts && posts.map((post, index: number) => (
                            <li
                                key={post.id ?? index}
                                className={cn(s.link, s.main_menu__links)} >
                                {router.pathname.startsWith(`/content/${page}`) && <div className={s.mainLink}> <span> {index + 1 + '.'} </span> <Link href={`/content/${page}/${post.category}/${post.slug}`}>{post.title}</Link></div>}
                            </li>
                        ))}
                    </ol>
                    </AnimationContainer>
                </div>
            </>
        );

};

export default MenuMainLinks;