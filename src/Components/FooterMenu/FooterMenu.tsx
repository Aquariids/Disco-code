import s from './FooterMenu.module.css';
import { FooterProps } from './FooterMenu.props';


const { footer, content,doc } = s;



const FooterMenu = ({ ...props }: FooterProps): JSX.Element => {



    return (
        <div className={footer} {...props}>
            <div className={content}>
                <div>Сообщество</div>
                <div className={doc}>Компонент с документацией</div>
            </div>
        </div>


    );
};


export default FooterMenu;