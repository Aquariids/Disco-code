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
    const r = router.asPath.length;

    return (
        <>
            <div className={cn(footer, {
                [s.footer2]: r >= 4
            })} {...props}>
                <div className={content}>
                    <div className={s.nav}>
                        <h3 className={s.footer_heading}> Навигация по сайту </h3>
                        <ul className={s.footer_nav_list} style={{ listStyleType: 'none' }}>
                            <li className={s.footer_item}><Link href={'/js/basicjs/browserMethodsAndConsole'}>Базовый javaScript</Link></li>
                            <li className={s.footer_item}><Link href={'/js/advancedjs/hoisting'}>Продвинутый javaScript</Link></li>
                            <li className={s.footer_item}><Link href={'/js/algorithmsjs/binarySearch'}>Алгоритмы javaScript</Link></li>
                            <li className={s.footer_item}><Link href={'/react/basicreact/ReactSinglePageApp'}> Базовый React </Link></li>
                            <li className={s.footer_item}><Link href={'/ts/basicts/installation'}>Основы typescript</Link></li>
                            <li className={s.footer_item}><Link href={'/paradigms/style/imperativeAndDeclarative'}>Стили написания кода</Link></li>
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
            <span className={s.doc}><Link href={'/docs/sitedocument'}>Документация по сайту</Link></span>
                <span >
              
                    {`© 2022 - ${format(new Date(), 'yyyy')} Дмитрий Черномашенцев`}</span>
            </div>
           
            
        </>

    );
};


export default FooterMenu;