import Link from "next/link";
import { useRouter } from "next/router";
import s from './Breadcrumbs.module.scss';
import { props } from './Breadcrumbs.props';
const Breadcrumbs = ({ slug, page, map, theme }: props): JSX.Element => {
    const router = useRouter();
    const path = router.asPath.split('/');
    // ссылки для уроков
    if (path[2] === page) {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={'/content'}><span className={s.breadcrumbs__link}>Уроки</span><span className={s.slash}> / </span></Link>
                    <Link href={path[3] != undefined ? `/content/${page}` : '/content'}><span className={s.breadcrumbs__link}>{theme}</span>{path[3] != undefined ? <span className={s.slash}> / </span> : ''}</Link>
                    {map && map.map(item => {
                        return (
                            <>
                                {path[3] === item.category && <Link href={slug != undefined ? item.href1 : item.href2}><span className={s.breadcrumbs__link}>{item.title}</span><span className={s.slash}> / </span></Link>}
                                {path[3] === item.category || path[2] === item.category && slug ? <Link href={item.href1}><span className={s.breadcrumbs__link}>{slug}</span></Link> : ''}
                            </>
                        );
                    })}

                </div>
            </div>
        );
    }


    // ТУТ ссылки для тестов
    if (path[1] === page) {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={`/${page}`}><span className={s.breadcrumbs__link}>Тесты</span><span className={s.slash}> / </span></Link>
                    <Link href={`/${page}`}><span className={s.breadcrumbs__link}>{theme}</span></Link>
                </div>
            </div>
        );
    }


    else {
        return (
            <>

            </>
        );
    }
};

export default Breadcrumbs;