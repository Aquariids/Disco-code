import s from './FooterMenu.module.css';
import { FooterProps } from './FooterMenu.props';


const { footer, content } = s;



const FooterMenu = ({ ...props }: FooterProps): JSX.Element => {



    return (
        <div className={footer} {...props}>
            <div className={content}>
            <div>Компонент с документацией</div>
                <div>Сообщество</div>
            </div>
        </div>


    );
};


export default FooterMenu;