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
    <div>
      {questions.map((q, index) => (
        <Question question={q} key={index} />
      ))}
    </div>
  );
};
export default AI;
