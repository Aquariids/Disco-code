import s from './HeaderMenu.module.css';
import { HeaderProps } from './HeaderMenu.props';
import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

import Logo from '../UI/Logo/Logo';
import { Loading } from '../../../pages/_app';
const { header,link, content, logo, github } = s;

const HeaderMenu = ({ ...props }: HeaderProps): JSX.Element => {
const router = useRouter();


    return (
        <div className={cn(header, {
            [s.header2]: router.asPath.length > 18
        })} {...props}>
            <div className={content}>
                <div className={logo}>
                    {router.asPath.startsWith('/js')? <Logo path='/js' src='/logo/js_logo.svg'/>:''}
                    {router.asPath.startsWith('/ts')? <Logo path='/ts' src='/logo/ts_logo.svg'/>:''}
                    {router.asPath.startsWith('/react')? <Logo path='/react' src='/logo/react_logo.svg'/>:''}
                    {router.pathname === '/'? <Logo path='/' src='/logo/disco.svg'/>:''}
                    <span className={link} > <Link href={'/'}>DiscoCode</Link> </span> </div>

                <div className={s.nav}>
            <div className={s.dropdown}>
                <div className={s.btn}><button> Выбрать тему </button></div>
                    <ul className={s.dropdown_content}>
                        <li className={s.links}><Link href={'/js'}><span className={s.js}>JavaScript</span></Link></li>
                        <li className={s.links}><Link href={'/ts'}><span className={s.ts}>TypeScript</span></Link></li>
                        <li className={s.links}><Link href={'/react'}><span className={s.react}>React</span></Link></li>
                        <li className={s.links}><Link href={'/next'}><span className={s.next}>Next.js</span></Link></li>

                    </ul>
                </div>
                <div className={github}><a className={link} target={"_blank"} href={'https://github.com/Aquariids/Disco-code'}>Github <img style={{width:'15px'}} src='/link.svg'/></a></div>
            </div>
            </div>
            {router.asPath.length < 18? <Loading/>:''}            
        </div>
    );
};


export default HeaderMenu;