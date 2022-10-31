import AnimationContainerForCards from "./AnimationContainers/AnimationContainerForCards";
import s from "./Articles.module.css";
import Card from "./Card/Card";
const Articles = () => {

  return (
    <div className={s.articles}>
      <AnimationContainerForCards>
        <Card
          title={"JavaScript"}
          text={
            "Узнаем о базовом javaScript. Изучим более продвинутый материал по js. Немного взглянем на алгоритмы и коснемся разных тем"
          }
          color={"js"}
          url={"/js"}
        />
      </AnimationContainerForCards>

      <AnimationContainerForCards>
        <Card
          title={"React"}
          text={
            "Как создать приложение на react. Что такое JSX, хуки, состояние, компонент. Зачем нужен react и какие проблемы он решает"
          }
          color={"react"}
          url={"/react"}
        />
      </AnimationContainerForCards>

      <AnimationContainerForCards>
        <Card
          title={"TypeScript"}
          text={
            "Делаем из javaScript очень серьезного парня, с которым лучше не шутить"
          }
          color={"ts"}
          url={"/ts"}
        />
      </AnimationContainerForCards>

      <AnimationContainerForCards>
        <Card
          title={"Парадигмы программирования"}
          text={
            "Узнаем о том как люди пишут код и какие концепции используют для этого"
          }
          url={"/paradigms"}
        />
      </AnimationContainerForCards>

      <AnimationContainerForCards>

        <Card title={"Next.js"} text={"Познакомимся с таким javaScript фреймворком как next.js. Узнаем, что это за рендеринг такой SSR и SSG и многое другое! "} color={"next"} url={"/next-js"} />
        
      </AnimationContainerForCards>
    </div>
  );
};

export default Articles;
