import s from './HeaderMenu.module.css';
import { HeaderProps } from './Header.props';
import Link from 'next/link';
import { useRouter } from "next/router";



const { header, nav, link, content, logo, github } = s;



const HeaderMenu = ({ ...props }: HeaderProps): JSX.Element => {



    return (
        <header className={header} {...props}>
            <div className={content}>
                <div className={logo}> <span className={link} > <Link href={'/'}>DiscoCode</Link> </span> </div>
                <nav className={nav}>
                    <span className={link}><Link className={link} href='/js'>javaScript</Link></span>
                    <span className={link}><Link className={link} href='/grid'>Grid</Link></span>
                </nav>


                <div className={github}><a className={link} target={"_blank"} href={'https://github.com/Aquariids/Disco-code'}>Github</a></div>
            </div>

        </header>
    );
};


export default HeaderMenu;