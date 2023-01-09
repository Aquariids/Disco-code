import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { withLayout } from '../../../layout/Layout';
import s from './test.module.scss';
const index = () => {
    const  [p,setP] = useState('') as any;
    useEffect(()=> {
       if(localStorage.getItem('test1') != null) {
        setP(localStorage.getItem('test1'));
       }
        
    },[]);


    return (
            <div className={s.container}>
                <div className={s.test}>
                <div className={s.test__title}>Тест 1</div>
                    <div className={s.test__content}>
                        <div className={s.test__score}> Пройден на {`${p}%`}</div>
                        <div className={s.start}><Link href={'/tests/beginner/1'}>Начать</Link></div>
                    </div>
                    </div>
            </div>
    );
};





export default withLayout(index);



