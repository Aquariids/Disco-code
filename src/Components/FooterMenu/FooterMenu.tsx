import s from './FooterMenu.module.scss';
import { FooterProps } from './FooterMenu.props';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LinkA from '../../../public/link.svg';
import { format } from 'date-fns';

const { footer, footer__content, } = s;


const FooterMenu = ({ ...props }: FooterProps): JSX.Element => {

    const router = useRouter();
    const r = router.asPath.split('/').length;

    return (
        <>
            <div className={cn(footer, {
                [s.footerWithoutRightSide]: r >= 3
            })} {...props}>
                <div className={footer__content}>
                    <div className={s.footer__content__nav}>
                        <h3 className={s.footer__heading}> Навигация по сайту </h3>
                        <ul className={s.footer__navList} style={{ listStyleType: 'none' }}>
                            <li className={s.footer__item}><Link href={'/js/basic-js/browser-methods-and-console'}>Базовый javaScript</Link></li>
                            <li className={s.footer__item}><Link href={'/js/advanced-js/hoisting'}>Продвинутый javaScript</Link></li>
                            <li className={s.footer__item}><Link href={'/js/algorithms-js/binary-search'}>Алгоритмы javaScript</Link></li>
                            <li className={s.footer__item}><Link href={'/js/practice-js/webpack'}>Практика js & Webpack</Link></li>
                            <li className={s.footer__item}><Link href={'/js/under-the-hood-js/engine'}>JavaScript под капотом</Link></li>
                            <li className={s.footer__item}><Link href={'/react/basic-react/react-single-page-app'}> Базовый React </Link></li>
                            <li className={s.footer__item}><Link href={'/ts/basic-ts/installation'}>Основы typeScript</Link></li>
                            <li className={s.footer__item}><Link href={'/next-js/basic-next-js/create-next-app'}>Начало работы с next.js</Link></li>
                            <li className={s.footer__item}><Link href={'/paradigms/style/imperative-and-declarative'}>Стили написания кода</Link></li>
                            <li className={s.footer__item}><Link href={'/web-request-response'}>Как работает web - request & response</Link></li>


                        </ul>
                    </div>

                    <div className={s.footer__social}>
                        <h3 className={s.footer__heading}> Где меня найти </h3>
                        <ul className={s.footer__navList} style={{ listStyleType: 'none' }}>
                            <li className={s.footer__item}><a href="mailto:favoritePonyville@gmail.com">FavoritePonyville@gmail.com  </a> <LinkA /></li>
                            <li className={s.footer__item}><a target={"_blank"} href={'https://github.com/Aquariids'}>Github  </a> <LinkA /></li>
                            <li className={s.footer__item}><a target={"_blank"} href={'https://t.me/Aquariida'}>Телеграм  </a> <LinkA /></li>
                        </ul>
                    </div>


                </div>

            </div>
            <div className={s.footer__copyright}>
                <span className={s.footer__doc}><Link href={'/docs'}>Документация по сайту</Link></span>
                <span >
                    {`© 2022 - ${format(new Date(), 'yyyy', )} Дмитрий Черномашенцев`}

                </span>
            </div>

        </>

    );
};


export default FooterMenu;