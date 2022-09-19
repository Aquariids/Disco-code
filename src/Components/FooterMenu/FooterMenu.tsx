import s from './FooterMenu.module.css';
import { FooterProps } from './FooterMenu.props';
import cn from 'classnames';
import { useRouter } from 'next/router';

const { footer, content,doc } = s;



const FooterMenu = ({ ...props }: FooterProps): JSX.Element => {

const router = useRouter();

    return (
        <div className={cn(footer, {
            [s.footer2]: router.asPath.length > 18
        })} {...props}>
            <div className={s.navigation}>
            </div>
            <div className={content}>
                <ul style={{listStyleType:'none'}}>
                    <li>ссылка</li>
                    <li>ссылка</li>
                    <li>ссылка</li>
                    <li>ссылка</li>
                </ul>
               
            </div>
        </div>


    );
};


export default FooterMenu;