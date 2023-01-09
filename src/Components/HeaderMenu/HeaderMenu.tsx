import s from './HeaderMenu.module.scss';
import { HeaderProps } from './HeaderMenu.props';
import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Logo from '../UI/Logo/Logo';
import { Loading } from '../Loading/Loading';
const { header, header__link, header__content, header__logo, header__github } = s;

const HeaderMenu = ({ ...props }: HeaderProps): JSX.Element => {
    const router = useRouter();
    const r = router.asPath.split('/').length;

    const logoCreat = () => {
        if (router.asPath.startsWith('/js')) {
            return <Logo path='/js' src='/logo/js_logo.svg' />;
        }
        if (router.asPath.startsWith('/ts')) {
            return <Logo path='/ts' src='/logo/ts_logo.svg' />;
        }
        if (router.asPath.startsWith('/react')) {
            return <Logo path='/react' src='/logo/react_logo.svg' />;
        }
        if (router.asPath.startsWith('/next-js')) {
            return <Logo path='/next-js' src='/logo/nextjs_logo.svg' />;
        }
        if (router.asPath.startsWith('/node-js')) {
            return <Logo path='/next-js' src='/logo/nodeJs_logo.png' />;
        }
        else {
            return <Logo path='/' src='/logo/disco.svg' />;
        }
    };
    return (
        <div className={cn(header, {
            [s.headerWithoutRightSide]: (r >= 3) && router.asPath.split('/')[1] != 'tests'
        })} {...props}>
            <div className={header__content}>
                <div className={header__logo}>
                    {logoCreat()}
                    <span className={header__link} > <Link href={'/'}>DiscoCode</Link> </span>
                </div>
                
                <div className={s.header__nav}>
                <div className={s.header__tests}><Link href={'/tests'}>Тесты</Link></div>

                    <div className={s.header__dropdown}>
                        <div className={s.header__dropdown__btn}><button> Выбрать технологию </button></div>
                        <ul className={s.header__dropdown__content}>
                            <li className={s.js}><Link href={'/js'}><span>JavaScript</span></Link></li>
                            <li className={s.react}><Link href={'/react'}><span>React</span></Link></li>
                            <li className={s.ts}><Link href={'/ts'}><span>TypeScript</span></Link></li>
                            <li className={s.mainLinks}><Link href={'/paradigms'}><span>Парадигмы</span></Link></li>
                            <li className={s.next}><Link href={'/next-js'}><span>Next.js</span></Link></li>
                            <li className={s.node}><Link href={'/node-js'}><span>Node.js</span></Link></li>

                        </ul>
                    </div>

                    <div className={header__github}><a className={header__link} target={"_blank"} href={'https://github.com/Aquariids/Disco-code'}>Github <img alt='github' style={{ width: '15px', height: '15px' }} src='/link.svg' /></a></div>
                </div>
            </div>
            <Loading  />
        </div>
    );
};


export default HeaderMenu;