import s from './LoadingQuiz.module.scss';
import cn from 'classnames';
const LoadingQuiz = () => {

  return (
    <div className={s.loadPage}>
      <div className={s.screen}>
        <div className={s.balls}>
          <div className={cn(s.ball, s.ball__one)}></div>
          <div className={cn(s.ball, s.ball__two)}></div>
          <div className={cn(s.ball, s.ball__three)}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingQuiz;