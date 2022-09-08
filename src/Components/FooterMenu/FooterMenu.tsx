import s from './FooterMenu.module.css';
import { FooterProps } from './FooterMenu.props';

import { useRouter } from 'next/router';
import Menu from '../Menu/Menu';

const { footer, content,doc } = s;



const FooterMenu = ({ ...props }: FooterProps): JSX.Element => {

const router = useRouter();

    return (
        <div className={footer} {...props}>
            <div className={s.navigation}>
            </div>
            <div className={content}>
                <div>телеграм</div>
                <div className={doc}>
                    github
                </div>
                
            </div>
        </div>


    );
};


export default FooterMenu;