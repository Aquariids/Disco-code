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
            // text={
            //   "Узнаем о базовом javaScript. Изучим более продвинутый материал по js. Немного взглянем на алгоритмы и коснемся разных тем"
            // }
            color={"js"}
            url={"/js"}
          />

          <Card
            title={"React"}
            // text={
            //   "Как создать приложение на react. Что такое JSX, хуки, состояние, компонент. Зачем нужен react и какие проблемы он решает"
            // }
            color={"react"}
            url={"/react"}
          />

          <Card
            title={"TypeScript"}
            // text={
            //   "Делаем из javaScript очень серьезного парня, с которым лучше не шутить"
            // }
            color={"ts"}
            url={"/ts"}
          />


          <Card title={"Next.js"} 
          // text={"Познакомимся с таким javaScript фреймворком как next.js. Узнаем, что это за рендеринг такой SSR и SSG и многое другое! "} 
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
            // text={
            //   "Узнаем о том как люди пишут код и какие концепции используют для этого"
            // }
            url={"/paradigms"}
          />

          <Card
            title={"Web request & response"}
            // text={
            //   "Узнаем что происходит когда мы заходим на какую либо страницу, что за http ответы и запросы и какие протоколы в этом участвуют"
            // }
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
