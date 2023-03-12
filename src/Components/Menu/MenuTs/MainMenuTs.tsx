import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/app.context";
import { PostMeta } from "../../../../pages/api/api";
import { BASIC_TS, TS } from "../../../../pages/api/pages";
import MenuMainLinks from "../MenuMainLinks";
import { TsContextProps } from "./postsTs.props";

const MainMenuTs = (): JSX.Element => {
  const router = useRouter();
  const path = router.asPath.split("/");
  const { AllThemePosts } = useContext(AppContext);
  const { posts_Basic_Ts }: TsContextProps<PostMeta[]> = AllThemePosts;

  return (
    <>
      {path[3] === BASIC_TS && (
        <MenuMainLinks
          posts={posts_Basic_Ts}
          title="Основы typeScript"
          page={TS}
        />
      )}
    </>
  );
};

export default MainMenuTs;
