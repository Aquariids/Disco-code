import s from './HeaderMenu.module.css';
import { HeaderProps } from './HeaderMenu.props';
import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
const { header,link, content, logo, github } = s;



const HeaderMenu = ({ ...props }: HeaderProps): JSX.Element => {
const router = useRouter();


    return (
        <div className={cn(header, {
            [s.header2]: router.asPath.length > 18
        })} {...props}>
            <div className={content}>
                <div className={logo}>
                    <Link href={'/'}><img style={{width:'45px',cursor:'pointer'}} src='/logo.png'/></Link>
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


        </div>
    );
};


export default HeaderMenu;