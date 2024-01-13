import classes from './AI.module.css';
import Question from './Question/Question';
import ask from '../../assets/ASK.svg';
import Answer from './Answer/Answer';

const questions = [
  'What is my current Fitness Level?',
  'Suggest a post-workout meal!',
  'What is a healthy breakfast option for me?',
  'Recommend a workout routine for me!',
];

const AI = () => {
  return (
    <div className={classes.AI}>
      <img className={classes.askImg} src={ask} alt='ask AI picture' />
      <div className={classes.questions}>
        {questions.map((q, index) => (
          <Question question={q} key={index} />
        ))}
      </div>
      <div className={classes.answer}>
        <Answer />
      </div>
    </div>
  );
};
export default AI;
