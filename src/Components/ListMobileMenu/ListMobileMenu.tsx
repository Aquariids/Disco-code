import { useRouter } from 'next/router';
import React from 'react';
import MobileModalMenu from './mobileModalMenu/MobileModalMenu';


const ListMobileMenu = () => {
    const router = useRouter();
    return (
        <>
                {router.asPath.startsWith('/content/js/basic-js/') && <MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/content/js/advanced-js/')&& <MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/content/js/algorithms-js/')&&<MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/content/js/practice-js/')&&<MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/content/js/under-the-hood-js/')&&<MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/content/js/interview-js/')&&<MobileModalMenu page="js"/>}
                {router.asPath.startsWith('/content/ts/basic-ts/')&&<MobileModalMenu page="ts"/>}
                {router.asPath.startsWith('/content/react/basic-react/')&&<MobileModalMenu page="react"/>} 
                {router.asPath.startsWith('/content/react/interview-react/')&&<MobileModalMenu page="react"/>} 
                {router.asPath.startsWith('/content/paradigms/style/')&&<MobileModalMenu page="paradigms"/>} 
                {router.asPath.startsWith('/content/next-js/basic-next-js/')&&<MobileModalMenu page='next-js'/>} 
                {router.asPath.startsWith('/content/html-css/html/')&&<MobileModalMenu page='html-css'/>} 
                {router.asPath.startsWith('/content/node-js/basic-node-js/')&&<MobileModalMenu page='node-js'/>} 


        </>
    );
};

export default ListMobileMenu;