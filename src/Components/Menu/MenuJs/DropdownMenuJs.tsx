import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import Menu from '../Menu';
const DropdownMenuJs = (): JSX.Element => {

    const { postsJs } = useContext(AppContext);


    return (
        <>
            <Menu posts={postsJs?.postsJsBasic} category="basic-js" title="Базовый JavaScript" dropdown={true} page='js' />
            <Menu posts={postsJs?.postsJsAdvanced} category="advanced-js" title="Продвинутый JavaScript" dropdown={true} page='js' />
            <Menu posts={postsJs?.postsJsAlgorithms} title="Алгоритмы" category='algorithms-js'  dropdown={true} page='js' />
            <Menu posts={postsJs?.postsJsPractice} title="Практика & Webpack" category='practice-js'  dropdown={true} page='js' />


        </>
    );
};

export default DropdownMenuJs;