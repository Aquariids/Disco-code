import AnimationContainerForCards from ".././AnimationContainers/AnimationContainerForCards";
import s from "./Articles.module.css";
import Card from ".././Card/Card";
import { articlesProps } from "./Articles.props";

const Articles = ({category}:articlesProps):JSX.Element => {

  if(category === 'js') {
    
  return (
    <>
    <h3 className={s.articles_title}> JavaScript и технологии завязанные на нем</h3>
    
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

        <Card title={"Next.js"} text={"Познакомимся с таким javaScript фреймворком как next.js. Узнаем, что это за рендеринг такой SSR и SSG и многое другое! "} color={"next"} url={"/next-js"} />
        
      </AnimationContainerForCards>
    </div>
    </>
  );

  }
  if(category === 'other') {

    return (
      <>
      <h3 className={s.articles_title}> Разное о программировании </h3>
  
      <div className={s.articles}>
        <AnimationContainerForCards>
          <Card
            title={"Парадигмы программирования"}
            text={
              "Узнаем о том как люди пишут код и какие концепции используют для этого"
            }
            url={"/paradigms"}
          />
        </AnimationContainerForCards>
  
     
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
