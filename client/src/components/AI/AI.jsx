import classes from './AI.module.css';
import Question from './Question/Question';
import ask from '../../assets/ASK.svg';

const questions = [
  'What is my current fitness level?',
  'Suggest a post-workout meal',
  'What is a healthy breakfast option for me?',
  'Recommend a workout routine for me',
];

const AI = () => {
  return (
    <div className={classes.AI}>
      <img className={classes.ask} src={ask} alt='ask AI picture' />
      <div className={classes.questions}>
        {questions.map((q, index) => (
          <Question question={q} key={index} />
        ))}
      </div>
    </div>
  );
};
export default AI;
