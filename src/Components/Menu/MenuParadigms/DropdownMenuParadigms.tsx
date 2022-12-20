import React, { useContext } from 'react';
import { AppContext } from '../../../../context/app.context';
import { PostMeta } from '../../../../pages/api/api';
import DropdownMenuLinks from '../DropdownMenuLinks';
import { ParadigmsContextProps } from './postsParadigms.props';

const DropdownMenuParadigms = (): JSX.Element => {

    const { AllThemePosts } = useContext(AppContext);
    const { post_Style_Paradigms }: ParadigmsContextProps<PostMeta[]> = AllThemePosts;

    return (
        <>
            <DropdownMenuLinks posts={post_Style_Paradigms} title="Стили написания" category='style' page='paradigms' />
        </>
    );


};

export default DropdownMenuParadigms;