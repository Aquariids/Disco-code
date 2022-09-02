import s from './HeaderMenu.module.css';
import { HeaderProps } from './HeaderMenu.props';
import Link from 'next/link';


const { header, nav, link, content, logo, github } = s;



const HeaderMenu = ({ ...props }: HeaderProps): JSX.Element => {



    return (
        <header className={header} {...props}>
            <div className={content}>
                <div className={logo}> <span className={link} > <Link href={'/'}>DiscoCode</Link> </span> </div>
                <div className={s.btn}><button> Выбрать тему </button></div>
                <div className={github}><a className={link} target={"_blank"} href={'https://github.com/Aquariids/Disco-code'}>Github</a></div>
            </div>

        </header>
    );
};


export default HeaderMenu;