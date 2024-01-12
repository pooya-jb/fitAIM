import classes from './AI.module.css';
import Question from './Question/Question';

const questions = [
  'What is my current fitness level?',
  'Suggest a post-workout meal',
  'What is a healthy breakfast option for me?',
  'Recommend a workout routine for me',
];

const AI = () => {
  return (
    <div className={classes.AI}>
      <h2 className={classes.h2}>
        Leverage the power of AI
        <br />
        to lead you on your fitness journey!
      </h2>
      <div className={classes.questions}>
        {questions.map((q, index) => (
          <Question question={q} key={index} />
        ))}
      </div>
    </div>
  );
};
export default AI;
