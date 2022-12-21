import { useRouter } from 'next/router';
import React from 'react';
import MobileModalMenu from './mobileModalMenu/MobileModalMenu';


const ListMobileMenu = () => {
    const router = useRouter();
    return (
        <>
                {router.asPath.startsWith('/js/basic-js') && <MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/js/advanced-js')&& <MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/js/algorithms-js')&&<MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/js/practice-js')&&<MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/js/under-the-hood-js')&&<MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/js/interview-js')&&<MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/ts/basic-ts')&&<MobileModalMenu page="ts"/>}
                {router.asPath.startsWith('/react/basic-react')&&<MobileModalMenu page="react"/>} 
                {router.asPath.startsWith('/react/interview-react')&&<MobileModalMenu page="react"/>} 
                {router.asPath.startsWith('/paradigms/style')&&<MobileModalMenu page="paradigms"/>} 
                {router.asPath.startsWith('/next-js/basic-next-js')&&<MobileModalMenu page='next-js'/>} 
                {router.asPath.startsWith('/html-css/html')&&<MobileModalMenu page='html-css'/>} 

        </>
    );
};

export default ListMobileMenu;