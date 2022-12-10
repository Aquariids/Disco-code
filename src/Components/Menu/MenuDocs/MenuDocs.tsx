import Link from 'next/link';
import React from 'react';
import s from './MenuDocs.module.css';

const MenuDocs = () => {
    return (
            <>
                <ul className={s.docs}>
                    <h3 className={s.docsTitle}>Навигация</h3>
                    <Link href={'/docs#api'}>Api</Link>
                    <Link href={'/docs#context'}>Context</Link>
                    <Link href={'/docs#layout'}>Layout</Link>
                    <Link href={'/docs#как-мы-работаем-с-api-на-страницах'}>Api на страницах</Link>


                </ul>;
            </> 
            
        
    );
};

export default MenuDocs;