import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export  function Loading(): any {

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
            <span className={'loader fadeInTop'}> </span>
        </>

    );
}