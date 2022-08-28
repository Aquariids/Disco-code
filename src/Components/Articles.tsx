import Link from 'next/link';
import s from './Articles.module.css';
const Articles = () => {


    return <div className={s.articles}>
                    <span className={s.link}><Link  href='/js'>JavaScript</Link></span>
                    <span className={s.link}><Link  href='/grid'>Grid</Link></span>
                    <span className={s.link}><Link  href='/ts'>TypeScript</Link></span>
                    <span className={s.link}><Link  href='/nextjs'>NextJs</Link></span>
                    <span className={s.link}><Link  href='/react'>React</Link></span>

    </div>;


};

export default Articles;