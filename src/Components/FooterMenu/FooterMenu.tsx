import s from './FooterMenu.module.css';
import { FooterProps } from './FooterMenu.props';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LinkA from '../../../public/link.svg';
import { format } from 'date-fns';
const { footer, content, } = s;


const FooterMenu = ({ ...props }: FooterProps): JSX.Element => {

    const router = useRouter();
    const r = router.asPath.split('/').length;

    return (
        <>
            <div className={cn(footer, {
                [s.footer2]: r >= 3
            })} {...props}>
                <div className={content}>
                    <div className={s.nav}>
                        <h3 className={s.footer_heading}> Навигация по сайту </h3>
                        <ul className={s.footer_nav_list} style={{ listStyleType: 'none' }}>
                            <li className={s.footer_item}><Link href={'/js/basic-js/browser-methods-and-console'}>Базовый javaScript</Link></li>
                            <li className={s.footer_item}><Link href={'/js/advanced-js/hoisting'}>Продвинутый javaScript</Link></li>
                            <li className={s.footer_item}><Link href={'/js/algorithms-js/binary-search'}>Алгоритмы javaScript</Link></li>
                            <li className={s.footer_item}><Link href={'/react/basic-react/react-single-page-app'}> Базовый React </Link></li>
                            <li className={s.footer_item}><Link href={'/ts/basic-ts/installation'}>Основы typescript</Link></li>
                            <li className={s.footer_item}><Link href={'/paradigms/style/imperative-and-declarative'}>Стили написания кода</Link></li>
                            <li className={s.footer_item}><Link href={'/next-js/basicnext-js/create-next-app'}>Начало работы с next.js</Link></li>

                        </ul>
                    </div>

                    <div className={s.social}>
                        <h3 className={s.footer_heading}> Где меня найти </h3>
                        <ul className={s.footer_nav_list} style={{ listStyleType: 'none' }}>
                            <li className={s.footer_item}><a href="mailto:favoritePonyville@gmail.com">FavoritePonyville@gmail.com  </a> <LinkA/></li>
                            <li className={s.footer_item}><a target={"_blank"} href={'https://github.com/Aquariids/Disco-code'}>Github  </a> <LinkA /></li>
                            <li className={s.footer_item}><a target={"_blank"} href={'https://t.me/Aquariida'}>Телеграм  </a> <LinkA /></li>

                        </ul>
                    </div>

                    
                </div>
                
            </div>
           
            <div className={s.copyright}>
            <span className={s.doc}><Link href={'/docs/site-document'}>Документация по сайту</Link></span>
                <span >
              
                    {`© 2022 - ${format(new Date(), 'yyyy')} Дмитрий Черномашенцев`}</span>
            </div>
           
            
        </>

    );
};


export default FooterMenu;