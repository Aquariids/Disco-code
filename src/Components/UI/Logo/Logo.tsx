import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
const logo = () => {

    const router = useRouter();
    if(router.route.startsWith('/js')) {
        return (
            <Link href={'/'}><img style={{width:'40px',cursor:'pointer', borderRadius:'10px'}} src='/logo/js_logo.svg'/></Link> 
        );
    }
    if(router.route.startsWith('/react')) {
        return (
            <Link href={'/'}><img style={{width:'40px',cursor:'pointer'}} src='/logo/react_logo.svg'/></Link>
        );
    }
    if(router.route.startsWith('/ts')) {
        return (
            <Link href={'/'}><img style={{width:'40px',cursor:'pointer', borderRadius:'10px'}} src='/logo/ts_logo.svg'/></Link> 
        );
    }
    if(router.route.startsWith('/next')) {
        return (
            <Link href={'/'}><img style={{width:'40px',cursor:'pointer'}} src='/logo/nextjs_logo.svg'/></Link>
        );
    } 
    else {
        return (
            
            <Link href={'/'}><img style={{width:'40px',cursor:'pointer'}} src='/logo/disco.svg'/></Link>

        );
    }
};

export default logo;