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
                [s.footerWithoutRightSide]: (r >= 3) && router.asPath.split('/')[1] != 'tests'
            })} {...props}>
                <div className={footer__content}>
                    <div className={s.footer__content__nav}>
                        <h3 className={s.footer__heading}> Навигация по сайту </h3>
                        <ul className={s.footer__navList} style={{ listStyleType: 'none' }}>
                            <li className={s.footer__item}><Link href={'/content/js/basic-js'}>Базовый javaScript</Link></li>
                            <li className={s.footer__item}><Link href={'/content/js/advanced-js'}>Продвинутый javaScript</Link></li>
                            <li className={s.footer__item}><Link href={'/content/js/algorithms-js'}>Алгоритмы javaScript</Link></li>
                            <li className={s.footer__item}><Link href={'/content/js/practice-js'}>Практика js & Webpack</Link></li>
                            <li className={s.footer__item}><Link href={'/content/js/under-the-hood-js'}>JavaScript под капотом</Link></li>
                            <li className={s.footer__item}><Link href={'/content/react/basic-react'}> Базовый React </Link></li>
                            <li className={s.footer__item}><Link href={'/content/ts/basic-ts'}>Основы typeScript</Link></li>
                            <li className={s.footer__item}><Link href={'/content/next-js/basic-next-js'}>Начало работы с next.js</Link></li>
                            <li className={s.footer__item}><Link href={'/content/node-js/basic-node-js'}>Базовый node.js</Link></li>
                            <li className={s.footer__item}><Link href={'/content/paradigms/style'}>Стили написания кода</Link></li>
                            <li className={s.footer__item}><Link href={'/content/web-request-response'}>Как работает web - request & response</Link></li>
                            <li className={s.footer__item}><Link href={'/content/html-css'}>Коротко про html & css</Link></li>
                            <li className={s.footer__item}><Link href={'/tests'}>Тесты по javaScript</Link></li>


                        </ul>
                    </div>

                    <div className={s.footer__social}>
                        <h3 className={s.footer__heading}> Где меня найти </h3>
                        <ul className={s.footer__navList} style={{ listStyleType: 'none' }}>
                            <li className={s.footer__item}><a href="mailto:favoritePonyville@gmail.com">FavoritePonyville@gmail.com  </a> <LinkA /></li>
                            <li className={s.footer__item}><a target={"_blank"} href={'https://github.com/Aquariids'}>Github  </a> <LinkA /></li>
                            <li className={s.footer__item}><a target={"_blank"} href={'https://t.me/Aquariida'}>Телеграм </a> <LinkA /></li>
                            <li className={s.footer__item}><a target={"_blank"} href={'https://www.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D0%BC%D0%B0%D1%88%D0%B5%D0%BD%D1%86%D0%B5%D0%B2-1b439825b/'}>Linkedin  </a> <LinkA /></li>

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