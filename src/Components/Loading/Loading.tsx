import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './Loading.module.scss';

type TODO_ANY = any;

export const Loading = (): JSX.Element | TODO_ANY => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url: string) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);


        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);

        };


    });

    return loading && (
        <>
            <span className={cn(s.loader,s.fade)}> </span>
        </>

    );
}