import s from "./Articles.module.scss";
import Card from ".././Card/Card";
import { articlesProps } from "./Articles.props";

const Articles = ({ category }: articlesProps): JSX.Element => {

  if (category === 'js') {

    return (
      <>
        <div className={s.title}><span> JavaScript и технологии завязанные на нем</span></div>

        <div className={s.articles}>
          <Card
            title={"JavaScript"}
            color={"js"}
            url={"/js"}
          />

          <Card
            title={"React"}
            color={"react"}
            url={"/react"}
          />

          <Card
            title={"TypeScript"}
            color={"ts"}
            url={"/ts"}
          />


          <Card title={"Next.js"} 
          color={"next"} url={"/next-js"} />

        </div>
      </>
    );

  }
  if (category === 'other') {

    return (
      <>
        <div className={s.title}> <span>Разное о программировании</span> </div>

        <div className={s.articles}>
          <Card
            title={"Парадигмы программирования"}
            url={"/paradigms"}
          />

          <Card
            title={"Web request & response"}
            url={"/web-request-response"}
          />
        </div>

      </>
    );
  } else {
    return (
      <></>
    );
  }

};

export default Articles;
