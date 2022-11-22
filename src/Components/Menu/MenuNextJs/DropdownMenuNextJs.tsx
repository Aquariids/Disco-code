import React, { useContext } from 'react';
import {AppContext } from '../../../../context/app.context';
import Menu from '../Menu';

const DropdownMenuNextJs = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);

    const {posts_Basic_Next_Js} = AllThemePosts;
    console.log("(👍≖‿‿≖)👍 ✿ file: DropdownMenuNextJs.tsx ✿ line 8 ✿ MenuJs ✿ postsNextJs", AllThemePosts)


        return (
            <>
                <Menu posts={posts_Basic_Next_Js} title="Основы nextJs" category='basic-next-js' dropdown={true} page='next-js' />
            </>
        );
    

};

export default DropdownMenuNextJs;