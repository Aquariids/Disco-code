import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/app.context";
import { PostMeta } from "../../../../pages/api/api";
import MenuMainLinks from "../MenuMainLinks";
import { ReactContextProps } from "./postsReact.props";

const MainMenuReact = (): JSX.Element => {
  const router = useRouter();
  const path = router.asPath.split("/");
  const { AllThemePosts } = useContext(AppContext);


  const {
    posts_Basic_React,
    posts_Interview_React,
  }: ReactContextProps<PostMeta[]> = AllThemePosts;


  return (
    <>
      {path[3] === "basic-react" && (
        <MenuMainLinks
          posts={posts_Basic_React}
          title="Базовые темы react"
          category="basic-react"
          page="react"
        />
      )}
      {path[3] === "interview-react" && (
        <MenuMainLinks
          posts={posts_Interview_React}
          title="Собеседование"
          category="interview-react"
          page="react"
        />
      )}
    </>
  );
};

export default MainMenuReact;
