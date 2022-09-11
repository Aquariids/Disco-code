import s from './HeaderMenu.module.css';
import { HeaderProps } from './HeaderMenu.props';
import Link from 'next/link';

const { header,link, content, logo, github } = s;



const HeaderMenu = ({ ...props }: HeaderProps): JSX.Element => {



    return (
        <div className={header} {...props}>
            <div className={content}>
                <div className={logo}>
                    <img style={{width:'30px'}} src='/qq.png'/>
                    <span className={link} > <Link href={'/'}>DiscoCode</Link> </span> </div>

                <div className={s.nav}>
            <div className={s.dropdown}>
                <div className={s.btn}><button> Выбрать тему </button></div>
                    <ul className={s.dropdown_content}>
                        <li className={s.links}><Link href={'/js'}><span className={s.js}>JavaScript</span></Link></li>
                        <li className={s.links}><Link href={'js/'}><span className={s.ts}>TypeScript</span></Link></li>
                        <li className={s.links}><Link href={'js/'}>React</Link></li>
                        <li className={s.links}><Link href={'js'}>NextJs</Link></li>

                    </ul>
                </div>
                <div className={github}><a className={link} target={"_blank"} href={'https://github.com/Aquariids/Disco-code'}>Github</a></div>
            </div>
            </div>
      

        </div>
    );
};


export default HeaderMenu;