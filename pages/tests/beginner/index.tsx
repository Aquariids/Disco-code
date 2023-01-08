import React, { useEffect, useState } from 'react';
import { withLayout } from '../../../layout/Layout';

const index = () => {
    const  [p,setP] = useState('') as any;
    useEffect(()=> {
       if(localStorage.getItem('test1') != null) {
        setP(localStorage.getItem('test1'));
       }
        
    },[]);


    return (
        <div>
            <div>
                    <div>
                        <div>Тесты для начинающих </div>
                        <div>Тест 1. Пройден на {`${p}%`}</div>
                    </div>
            </div>
        </div>
    );
};





export default withLayout(index);



