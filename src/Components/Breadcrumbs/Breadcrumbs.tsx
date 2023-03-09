import Link from "next/link";
import { useRouter } from "next/router";
import s from './Breadcrumbs.module.scss';
type props = {
    slug?: string;
};
const Breadcrumbs = ({ slug }: props): JSX.Element => {
    
    const router = useRouter();
    const path = router.asPath.split('/');
    console.log(slug)
    if (path[2] === 'js') {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={'/content'}><span className={s.breadcrumbs__link}>Уроки</span><span className={s.slash}> / </span></Link>
                    <Link href={'/content/js'}><span className={s.breadcrumbs__link}>JavaScript</span><span className={s.slash}> / </span></Link>
                    {path[3] === 'basic-js' && <Link href={'/content/js/basic-js'}><span className={s.breadcrumbs__link}>Базовый JavaScript</span><span className={s.slash}> / </span></Link>}
                    {path[3] === 'advanced-js' && <Link href={'/content/js/advanced-js'}><span className={s.breadcrumbs__link}>Продвинутый JavaScript</span><span className={s.slash}> / </span></Link>}
                    {path[3] === 'algorithms-js' && <Link href={'/content/js/algorithms-js'}><span className={s.breadcrumbs__link}>Алгоритмы</span><span className={s.slash}> / </span></Link>}
                    {path[3] === 'practice-js' && <Link href={'/content/js/practice-js'}><span className={s.breadcrumbs__link}>Практика & webpack</span><span className={s.slash}> / </span></Link>}
                    {path[3] === 'under-the-hood-js' && <Link href={'/content/js/under-the-hood-js'}><span className={s.breadcrumbs__link}>JavaScript под капотом</span><span className={s.slash}> / </span></Link>}
                    {path[3] === 'interview-js' && <Link href={'/content/js/interview-js'}><span className={s.breadcrumbs__link}>Собеседование</span><span className={s.slash}> / </span></Link>}
                    {slug && <Link href={'#'}><span className={s.breadcrumbs__link}>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'react') {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={'/content'}><span className={s.breadcrumbs__link}>Уроки</span><span className={s.slash}> / </span></Link>
                    <Link href={'/content/react'}><span className={s.breadcrumbs__link}>React</span><span className={s.slash}> / </span></Link>
                    {path[3] === 'basic-react' && <Link href={'/content/react/basic-react'}><span className={s.breadcrumbs__link}>Базовый React</span><span className={s.slash}> / </span></Link>}
                    {path[3] === 'interview-react' && <Link href={'/content/react/interview-react'}><span className={s.breadcrumbs__link}>Продвинутый React</span><span className={s.slash}> / </span></Link>}

                    {slug && <Link href={'#'}><span className={s.breadcrumbs__link}>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'ts') {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={'/content'}><span className={s.breadcrumbs__link}>Уроки</span><span className={s.slash}> / </span></Link>
                    <Link href={'/content/ts'}><span className={s.breadcrumbs__link}>TypeScript</span><span className={s.slash}> / </span></Link>
                    {path[3] === 'basic-ts' && <Link href={'/content/ts/basic-ts'}><span className={s.breadcrumbs__link}>Основы typeScript</span><span className={s.slash}> / </span></Link>}

                    {slug && <Link href={'#'}><span className={s.breadcrumbs__link}>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'next-js') {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={'/content'}><span className={s.breadcrumbs__link}>Уроки</span><span className={s.slash}> / </span></Link>
                    <Link href={'/content/next-js'}><span className={s.breadcrumbs__link}>Next.js</span><span className={s.slash}> / </span></Link>
                    {path[3] === 'basic-next-js' && <Link href={'/content/next-js/basic-next-js'}><span className={s.breadcrumbs__link}>Основы next.js</span><span className={s.slash}> / </span></Link>}

                    {slug && <Link href={'#'}><span className={s.breadcrumbs__link}>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'node-js') {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={'/content'}><span className={s.breadcrumbs__link}>Уроки</span><span className={s.slash}> / </span></Link>
                    <Link href={'/content/node-js'}><span className={s.breadcrumbs__link}>Node.js</span><span className={s.slash}> / </span></Link>
                    {path[3] === 'basic-node-js' && <Link href={'/content/node-js/basic-node-js'}><span className={s.breadcrumbs__link}>Базовые node.js</span><span className={s.slash}> / </span></Link>}

                    {slug && <Link href={'#'}><span className={s.breadcrumbs__link}>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'html-css') {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={'/content'}><span className={s.breadcrumbs__link}>Уроки</span><span className={s.slash}> / </span></Link>
                    <Link href={'/content/html-css'}><span className={s.breadcrumbs__link}>Html & css</span><span className={s.slash}> / </span></Link>
                    {path[3] === 'html' && <Link href={'/content/html-css/html'}><span className={s.breadcrumbs__link}>Html</span><span className={s.slash}> / </span></Link>}

                    {slug && <Link href={'#'}><span className={s.breadcrumbs__link}>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'paradigms') {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={'/content'}><span className={s.breadcrumbs__link}>Уроки</span><span className={s.slash}> / </span></Link>
                    <Link href={'/content/paradigms'}><span className={s.breadcrumbs__link}>Парадигмы</span><span className={s.slash}> / </span></Link>
                    {path[3] === 'style' && <Link href={'/content/paradigms/style'}><span className={s.breadcrumbs__link}>Стили написания</span><span className={s.slash}> / </span></Link>}

                    {slug && <Link href={'#'}><span className={s.breadcrumbs__link}>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'web-request-response') {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={'/content'}><span className={s.breadcrumbs__link}>Уроки</span><span className={s.slash}> / </span></Link>
                    {slug && <Link href={''}><span className={s.breadcrumbs__link}>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'beginner') {
        return (
            <div className={s.breadcrumbs}>
                <div className={s.breadcrumbs__content}>
                    <Link href={'/tests'}><span className={s.breadcrumbs__link}>Тесты</span><span className={s.slash}> / </span></Link>
                    <Link href={'/tests/beginner'}><span className={s.breadcrumbs__link}>Beginner</span></Link>

                    {slug && <Link href={'#'}><span className={s.breadcrumbs__link}>{slug}</span></Link>}
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