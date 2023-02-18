import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/app.context";
import { PostMeta } from "../../../../pages/api/api";
import MenuMainLinks from "../MenuMainLinks";
import { JsContextProps } from "./postsJs.props";

const MainMenuJs = (): JSX.Element => {
  const { AllThemePosts } = useContext(AppContext);
  const router = useRouter();
  const path = router.asPath.split("/");

  const {
    posts_Basic_Js,
    posts_Advanced_Js,
    posts_Algorithms_Js,
    posts_Practice_Js,
    posts_Under_The_Hood_Js,
    posts_Interview_Js,
  }: JsContextProps<PostMeta[]> = AllThemePosts;

  return (
    <>
      {path[3] === "basic-js" && (
        <MenuMainLinks
          posts={posts_Basic_Js}
          title="Базовый JavaScript"
          page="js"
        />
      )}
      {path[3] === "advanced-js" && (
        <MenuMainLinks
          posts={posts_Advanced_Js}
          title="Продвинутый JavaScript"
          page="js"
        />
      )}
      {path[3] === "algorithms-js" && (
        <MenuMainLinks
          posts={posts_Algorithms_Js}
          title="Алгоритмы"
          page="js"
        />
      )}
      {path[3] === "practice-js" && (
        <MenuMainLinks
          posts={posts_Practice_Js}
          title="Практика & Webpack"
          page="js"
        />
      )}
      {path[3] === "under-the-hood-js" && (
        <MenuMainLinks
          posts={posts_Under_The_Hood_Js}
          title="JavaScript под капотом"
          page="js"
        />
      )}
      {path[3] === "interview-js" && (
        <MenuMainLinks
          posts={posts_Interview_Js}
          title="Собеседование"
          page="js"
        />
      )}
      </>
  );
};

export default MainMenuJs;
