import React from 'react';
import { withLayout } from '../../layout/Layout';
import s from './tests.module.scss';

const index = () => {
    return (
        <div className={s.tests}>
            <div className={s.tests}>
                    <div className={s.tests__beginner}>
                        <div>Тесты для начинающих </div>
                    </div>
            </div>
        </div>
    );
};


export default withLayout(index);
