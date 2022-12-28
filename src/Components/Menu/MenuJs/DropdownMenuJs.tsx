import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import DropdownMenuLinks from '../DropdownMenuLinks';
import { JsContextProps } from './postsJs.props';


const DropdownMenuJs = (): JSX.Element => {


    const { AllThemePosts } = useContext(AppContext);

    const { posts_Basic_Js, posts_Advanced_Js, posts_Algorithms_Js, posts_Practice_Js, posts_Under_The_Hood_Js, posts_Interview_Js }: JsContextProps<PostMeta[]> = AllThemePosts;

    return (
        <>
            <DropdownMenuLinks posts={posts_Basic_Js} category="basic-js" title="Базовый JavaScript" page='js' />
            <DropdownMenuLinks posts={posts_Advanced_Js} category="advanced-js" title="Продвинутый JavaScript" page='js' />
            <DropdownMenuLinks posts={posts_Algorithms_Js} title="Алгоритмы" category='algorithms-js' page='js' />
            <DropdownMenuLinks posts={posts_Practice_Js} title="Практика & Webpack" category='practice-js' page='js' />
            <DropdownMenuLinks posts={posts_Under_The_Hood_Js} title="JavaScript под капотом" category='under-the-hood-js' page='js' />
            <DropdownMenuLinks posts={posts_Interview_Js} title="Собеседование" category='interview-js' page='js' />

        </>
    );
};

export default DropdownMenuJs;