import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import { ADVANCED_JS, ALGORITHMS_JS, BASIC_JS, JS, PRACTICE_JS, UNDER_THE_HOOD_JS } from '../../../../pages/api/pages';
import DropdownMenuLinks from '../DropdownMenuLinks';
import { JsContextProps } from './postsJs.props';


const DropdownMenuJs = (): JSX.Element => {


    const { AllThemePosts } = useContext(AppContext);

    const { posts_Basic_Js, posts_Advanced_Js, posts_Algorithms_Js, posts_Practice_Js, posts_Under_The_Hood_Js, posts_Interview_Js }: JsContextProps<PostMeta[]> = AllThemePosts;

    return (
        <>
            <DropdownMenuLinks posts={posts_Basic_Js}  title="Базовый JavaScript" category={BASIC_JS} page={JS} />
            <DropdownMenuLinks posts={posts_Advanced_Js}  title="Продвинутый JavaScript" category={ADVANCED_JS} page={JS}/>
            <DropdownMenuLinks posts={posts_Algorithms_Js} title="Алгоритмы" category={ALGORITHMS_JS} page={JS} />
            <DropdownMenuLinks posts={posts_Practice_Js} title="Практика & Webpack" category={PRACTICE_JS} page={JS} />
            <DropdownMenuLinks posts={posts_Under_The_Hood_Js} title="JavaScript под капотом" category={UNDER_THE_HOOD_JS} page={JS} />
            {/* <DropdownMenuLinks posts={posts_Interview_Js} title="Собеседование" category='interview-js' page={JS} /> */}
        </>
    );
};

export default DropdownMenuJs;