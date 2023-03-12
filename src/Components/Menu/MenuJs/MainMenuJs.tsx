import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/app.context";
import { PostMeta } from "../../../../pages/api/api";
import { ADVANCED_JS, ALGORITHMS_JS, BASIC_JS, JS, PRACTICE_JS, UNDER_THE_HOOD_JS } from "../../../../pages/api/pages";
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
      {path[3] === BASIC_JS && (
        <MenuMainLinks
          posts={posts_Basic_Js}
          title="Базовый JavaScript"
          page={JS}
        />
      )}
      {path[3] === ADVANCED_JS && (
        <MenuMainLinks
          posts={posts_Advanced_Js}
          title="Продвинутый JavaScript"
          page={JS}
        />
      )}
      {path[3] === ALGORITHMS_JS && (
        <MenuMainLinks
          posts={posts_Algorithms_Js}
          title="Алгоритмы"
          page={JS}
        />
      )}
      {path[3] === PRACTICE_JS && (
        <MenuMainLinks
          posts={posts_Practice_Js}
          title="Практика & Webpack"
          page={JS}
        />
      )}
      {path[3] === UNDER_THE_HOOD_JS && (
        <MenuMainLinks
          posts={posts_Under_The_Hood_Js}
          title="JavaScript под капотом"
          page={JS}
        />
      )}
      {/* {path[3] === "interview-js" && (
        <MenuMainLinks
          posts={posts_Interview_Js}
          title="Собеседование"
          page={JS}
        />
      )} */}
      </>
  );
};

export default MainMenuJs;
