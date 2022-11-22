import { useRouter } from 'next/router';
import React from 'react';
import MobileModalMenu from '../MobileModalMenu';


const ListMobileMenu = () => {
    const router = useRouter();
    return (
        <>
                {router.asPath.startsWith('/js/basic-js')?<MobileModalMenu js="js"/>:<></>}
                {router.asPath.startsWith('/js/advanced-js')?<MobileModalMenu js="js"/>:<></>}
                {router.asPath.startsWith('/js/algorithms-js')?<MobileModalMenu js="js"/>:<></>}
                {router.asPath.startsWith('/js/practice-js')?<MobileModalMenu js="js"/>:<></>}
                {router.asPath.startsWith('/ts/basic-ts')?<MobileModalMenu ts="ts"/>:<></>}
                {router.asPath.startsWith('/react/basic-react')?<MobileModalMenu react="react"/>:<></>} 
                {router.asPath.startsWith('/paradigms/style')?<MobileModalMenu paradigms="paradigms"/>:<></>} 
                {router.asPath.startsWith('/next-js/basic-next-js')?<MobileModalMenu nextJs='next-js'/>:<></>} 


        </>
    );
};

export default ListMobileMenu;