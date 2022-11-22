import s from './HeaderMenu.module.css';
import { HeaderProps } from './HeaderMenu.props';
import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Logo from '../UI/Logo/Logo';
import { Loading } from '../Loading/Loading';
const { header, link, content, logo, github } = s;

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

        else {
            return <Logo path='/' src='/logo/disco.svg' />;
        }
    };
    return (
        <div className={cn(header, {
            [s.header2]: r >= 3
        })} {...props}>
            <div className={content}>
                <div className={logo}>
                    {logoCreat()}
                    <span className={link} > <Link href={'/'}>DiscoCode</Link> </span>
                </div>

                <div className={s.nav}>
                    <div className={s.dropdown}>
                        <div className={s.btn}><button> Выбрать тему </button></div>
                        <ul className={s.dropdown_content}>
                            <li><Link href={'/js'}><span className={s.js}>JavaScript</span></Link></li>
                            <li><Link href={'/react'}><span className={s.react}>React</span></Link></li>
                            <li><Link href={'/ts'}><span className={s.ts}>TypeScript</span></Link></li>
                            <li><Link href={'/paradigms'}><span className={s.mainLinks}>Парадигмы</span></Link></li>
                            <li className={s.links}><Link href={'/next-js'}><span className={s.next}>Next.js</span></Link></li>

                        </ul>
                    </div>
                    <div className={github}><a className={link} target={"_blank"} href={'https://github.com/Aquariids/Disco-code'}>Github <img style={{ width: '15px', height: '15px' }} src='/link.svg' /></a></div>
                </div>
            </div>
            <Loading  />
        </div>
    );
};


export default HeaderMenu;