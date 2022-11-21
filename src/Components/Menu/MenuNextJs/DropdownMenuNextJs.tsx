import React, { useContext } from 'react';
import {NextJsContext } from '../../../../context/app.context';
import Menu from '../Menu';

const MenuJs = (): JSX.Element => {

    const { postsNextJs } = useContext(NextJsContext);

    console.log("(👍≖‿‿≖)👍 ✿ file: DropdownMenuNextJs.tsx ✿ line 8 ✿ MenuJs ✿ postsNextJs", postsNextJs)


        return (
            <>
                <Menu posts={postsNextJs?.basic_next_js} title="Основы nextJs" category='basic-next-js' dropdown={true} page='next-js' />
            </>
        );
    

};

export default MenuJs;