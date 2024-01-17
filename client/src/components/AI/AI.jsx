import classes from './AI.module.css';
import Question from './Question/Question';
import ask from '../../assets/ASK.svg';
import Answer from './Answer/Answer';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const questions = [
  'What is my current Fitness Level?',
  'Give me a fitness tip!',
  'Motivate me!',
  'Inspire me!',
];

const AI = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(`isAuthenticated:`, isAuthenticated);
  const [error, setError] = useState('');
  const clickHandler = () => {
    setError('👈 Please login or resgister!');
    setTimeout(() => {
      setError('');
    }, 3000);
  };
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
      {!isAuthenticated && (
        <div className={classes.getPlans}>
          <button className={classes.getBtn} onClick={clickHandler}>
            Get your weekly Diet and Workout Plan from FitAIM!
          </button>
          {error && <p className={classes.error}>{error}</p>}
        </div>
      )}
    </div>
  );
};
export default AI;
