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

    return (
        <>
            <div className={cn(footer, {
                [s.footer2]: router.asPath.length > 18
            })} {...props}>
                <div className={content}>
                    <div className={s.nav}>
                        <h3> Навигация по сайту </h3>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><Link href={'/js/basicjs/browserMethodsAndConsole'}>Базовый javaScript</Link></li>
                            <li><Link href={'/js/advancedjs/json'}>Продвинутый javaScript</Link></li>
                            <li><Link href={'/js/algorithmsjs/binarySearch'}>Алгоритмы javaScript</Link></li>
                            <li><Link href={'/react/basicreact/ReactSinglePageApp'}> Базовый React </Link></li>
                            <li><Link href={'/ts/basicts/installation'}>Работа с typescript</Link></li>
                        </ul>
                    </div>

                    <div className={s.social}>
                        <h3> Где меня найти </h3>
                        <ul className={s.socialList} style={{ listStyleType: 'none' }}>
                            <li><a className={s.link} href="mailto:favoritePonyville@gmail.com">FavoritePonyville@gmail.com <LinkA /> </a></li>
                            <li><a className={s.link} target={"_blank"} href={'https://github.com/Aquariids/Disco-code'}>Github <LinkA /> </a></li>
                            <li><a className={s.link} target={"_blank"} href={'https://t.me/Aquariida'}>Телеграм <LinkA /> </a></li>

                        </ul>
                    </div>

                    
                </div>
                
            </div>
            <div className={s.copyright}>
                <span >{`© 2022 - ${format(new Date(), 'yyyy')} Дмитрий Черномашенцев`}</span>
            </div>
            
        </>

    );
};


export default FooterMenu;