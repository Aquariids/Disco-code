import { useRouter } from 'next/router';
import React from 'react';
import MobileModalMenu from '../MobileModalMenu';


const ListMobileMenu = () => {
    const router = useRouter();
    return (
        <>
                {router.asPath.startsWith('/js/basicjs')?<MobileModalMenu js="js"/>:<></>}
                {router.asPath.startsWith('/js/advancedjs')?<MobileModalMenu js="js"/>:<></>}
                {router.asPath.startsWith('/js/algorithmsjs')?<MobileModalMenu js="js"/>:<></>}
                {router.asPath.startsWith('/ts/basicts')?<MobileModalMenu ts="ts"/>:<></>}
                {router.asPath.startsWith('/react/basicreact')?<MobileModalMenu react="react"/>:<></>} 
                {router.asPath.startsWith('/paradigms/style')?<MobileModalMenu paradigms="paradigms"/>:<></>} 

        </>
    );
};

export default ListMobileMenu;