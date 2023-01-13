// loadingScreen.js
import styled from "styled-components";
import s from './QuizJsListTestBeginner.module.scss';

const LoadingQuiz = () => {

    const Screen = styled.div`
  position: relative;
  opacity: 0;
  min-height:100vh;
  width:100%;
  
  animation: fade 0.4s ease-in forwards;
  background: #FFF;
  background-image: 'none';

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  
    

`;

const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: var(--basic_color);
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }

 

  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 2s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }



  @media screen and (max-width:800px) {
    .ball {
      width:15px;
      height:15px;
    }
  }




`;
    return (
      <div className={s.loadPage}>
      <Screen>
        <Balls>
          <div className="ball one"></div>
          <div className="ball two"></div>
          <div className="ball three"></div>
        </Balls>
      </Screen>
      </div>
    );
  };
  
  export default LoadingQuiz;