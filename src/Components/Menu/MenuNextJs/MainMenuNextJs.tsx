import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/app.context";
import { PostMeta } from "../../../../pages/api/api";
import { BASIC_NEXT_JS, NEXT_JS } from "../../../../pages/api/pages";
import MenuMainLinks from "../MenuMainLinks";
import { NextJsContextProps } from "./postsNextJs.props";

const MainMenuNextJs = (): JSX.Element => {
  const { AllThemePosts } = useContext(AppContext);
  const { posts_Basic_Next_Js }: NextJsContextProps<PostMeta[]> = AllThemePosts;
  const router = useRouter();
  const path = router.asPath.split("/");
  return (
    <>
      {path[3] === BASIC_NEXT_JS && (
        <MenuMainLinks
          posts={posts_Basic_Next_Js}
          title="Основы next.js"
          page={NEXT_JS}
        />
      )}
      
    </>
  );
};

export default MainMenuNextJs;
