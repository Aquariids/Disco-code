import React, { useContext } from 'react';
import {TsContext } from '../../../../context/app.context';
import Menu from '../Menu';
const DropdownMenuJs = (): JSX.Element => {

    const { postsTs } = useContext(TsContext);


    return (
        <>
            <Menu posts={postsTs?.basic_Ts} title="Основы typeScript" category='basic-ts' dropdown={true} page='ts' />
        </>
    );
};

export default DropdownMenuJs;