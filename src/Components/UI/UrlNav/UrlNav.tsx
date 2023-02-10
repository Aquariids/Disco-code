import Link from "next/link";
import { useRouter } from "next/router";
type props = {
    slug?: string;
}
const UrlNav = ({ slug }: props): JSX.Element => {
    const router = useRouter();
    const path = router.asPath.split('/');

    if (path[2] === 'js') {
        return (
            <div className={'navUrl'}>
                <div className='navUrlContent'>
                    <Link href={'/content'}><span className='navUrlLink'>Уроки</span><span className="slash"> / </span></Link>
                    <Link href={'/content/js'}><span className='navUrlLink'>JavaScript</span><span className="slash"> / </span></Link>
                    {path[3] === 'basic-js' && <Link href={'/content/js/basic-js'}><span className='navUrlLink'>Базовый JavaScript</span><span className="slash"> / </span></Link>}
                    {path[3] === 'advanced-js' && <Link href={'/content/js/advanced-js'}><span className='navUrlLink'>Продвинутый JavaScript</span><span className="slash"> / </span></Link>}
                    {path[3] === 'algorithms-js' && <Link href={'/content/js/algorithms-js'}><span className='navUrlLink'>Алгоритмы</span><span className="slash"> / </span></Link>}
                    {path[3] === 'practice-js' && <Link href={'/content/js/practice-jss'}><span className='navUrlLink'>Практика & webpack</span><span className="slash"> / </span></Link>}
                    {path[3] === 'under-the-hood-js' && <Link href={'/content/js/under-the-hood-js'}><span className='navUrlLink'>JavaScript под капотом</span><span className="slash"> / </span></Link>}
                    {path[3] === 'interview-js' && <Link href={'/content/js/interview-js'}><span className='navUrlLink'>Собеседование</span><span className="slash"> / </span></Link>}
                    {slug && <Link href={'#'}><span className='navUrlLink'>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'react') {
        return (
            <div className={'navUrl'}>
                <div className='navUrlContent'>
                    <Link href={'/content'}><span className='navUrlLink'>Уроки</span><span className="slash"> / </span></Link>
                    <Link href={'/content/react'}><span className='navUrlLink'>React</span><span className="slash"> / </span></Link>
                    {path[3] === 'basic-react' && <Link href={'/content/react/basic-react'}><span className='navUrlLink'>Базовый React</span><span className="slash"> / </span></Link>}
                    {path[3] === 'interview-react' && <Link href={'/content/react/interview-react'}><span className='navUrlLink'>Продвинутый React</span><span className="slash"> / </span></Link>}

                    {slug && <Link href={'#'}><span className='navUrlLink'>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'ts') {
        return (
            <div className={'navUrl'}>
                <div className='navUrlContent'>
                    <Link href={'/content'}><span className='navUrlLink'>Уроки</span><span className="slash"> / </span></Link>
                    <Link href={'/content/ts'}><span className='navUrlLink'>TypeScript</span><span className="slash"> / </span></Link>
                    {path[3] === 'basic-ts' && <Link href={'/content/ts/basic-ts'}><span className='navUrlLink'>Основы typeScript</span><span className="slash"> / </span></Link>}

                    {slug && <Link href={'#'}><span className='navUrlLink'>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'next-js') {
        return (
            <div className={'navUrl'}>
                <div className='navUrlContent'>
                    <Link href={'/content'}><span className='navUrlLink'>Уроки</span><span className="slash"> / </span></Link>
                    <Link href={'/content/next-js'}><span className='navUrlLink'>Next.js</span><span className="slash"> / </span></Link>
                    {path[3] === 'basic-next-js' && <Link href={'/content/next-js/basic-next-js'}><span className='navUrlLink'>Основы next.js</span><span className="slash"> / </span></Link>}

                    {slug && <Link href={'#'}><span className='navUrlLink'>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'node-js') {
        return (
            <div className={'navUrl'}>
                <div className='navUrlContent'>
                    <Link href={'/content'}><span className='navUrlLink'>Уроки</span><span className="slash"> / </span></Link>
                    <Link href={'/content/node-js'}><span className='navUrlLink'>Node.js</span><span className="slash"> / </span></Link>
                    {path[3] === 'basic-node-js' && <Link href={'/content/node-js/basic-node-js'}><span className='navUrlLink'>Базовые node.js</span><span className="slash"> / </span></Link>}

                    {slug && <Link href={'#'}><span className='navUrlLink'>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'html-css') {
        return (
            <div className={'navUrl'}>
                <div className='navUrlContent'>
                    <Link href={'/content'}><span className='navUrlLink'>Уроки</span><span className="slash"> / </span></Link>
                    <Link href={'/content/html-css'}><span className='navUrlLink'>Html & css</span><span className="slash"> / </span></Link>
                    {path[3] === 'html' && <Link href={'/content/html-css/html'}><span className='navUrlLink'>Html</span><span className="slash"> / </span></Link>}

                    {slug && <Link href={'#'}><span className='navUrlLink'>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'paradigms') {
        return (
            <div className={'navUrl'}>
                <div className='navUrlContent'>
                    <Link href={'/content'}><span className='navUrlLink'>Уроки</span><span className="slash"> / </span></Link>
                    <Link href={'/content/paradigms'}><span className='navUrlLink'>Парадигмы</span><span className="slash"> / </span></Link>
                    {path[3] === 'style' && <Link href={'/content/paradigms/style'}><span className='navUrlLink'>Стили написания</span><span className="slash"> / </span></Link>}

                    {slug && <Link href={'#'}><span className='navUrlLink'>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'web-request-response') {
        return (
            <div className={'navUrl'}>
                <div className='navUrlContent'>
                    <Link href={'/content'}><span className='navUrlLink'>Уроки</span><span className="slash"> / </span></Link>
                    {slug && <Link href={''}><span className='navUrlLink'>{slug}</span></Link>}
                </div>
            </div>
        );
    }

    if (path[2] === 'beginner') {
        return (
            <div className={'navUrl'}>
                <div className='navUrlContent'>
                    <Link href={'/tests'}><span className='navUrlLink'>Тесты</span><span className="slash"> / </span></Link>
                    <Link href={'/tests/beginner'}><span className='navUrlLink'>Beginner</span></Link>

                    {slug && <Link href={'#'}><span className='navUrlLink'>{slug}</span></Link>}
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

export default UrlNav;