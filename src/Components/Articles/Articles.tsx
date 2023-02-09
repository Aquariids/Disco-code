import s from "./Articles.module.scss";
import Card from ".././Card/Card";
import { articlesProps } from "./Articles.props";

const Articles = ({ category }: articlesProps): JSX.Element => {

  if (category === 'js') {

    return (
      <div className={s.articles}>
        <div className={s.articles__title}><span> JavaScript и технологии завязанные на нем</span></div>

        <div className={s.articles__article}>
          <Card
            title={"JavaScript"}
            color={"js"}
            url={"content/js"}
          />

          <Card
            title={"React"}
            color={"react"}
            url={"content/react"}
          />

          <Card
            title={"TypeScript"}
            color={"ts"}
            url={"content/ts"}
          />


          <Card title={"Next.js"} 
          color={"next"} url={"content/next-js"} />

        <Card title={"Node.js"} 
          color={"node"} url={"content/node-js"} />
        </div>
      </div>
    );

  }
  if (category === 'other') {

    return (
      <div className={s.articles}>
        <div className={s.articles__title}> <span>Разное о программировании</span> </div>

        <div className={s.articles__article}>
          <Card
            title={"Парадигмы программирования"}
            url={"content/paradigms"}
          />

          <Card
            title={"Web request & response"}
            url={"content/web-request-response"}
          />

          <Card
            title={"Html & Css"}
            url={"content/html-css"}
            color= {"html"}
          />
        </div>

      </div>
    );
  } else {
    return (
      <></>
    );
  }

};

export default Articles;
