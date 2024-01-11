import classes from './Question.module.css';
const Question = (prop) => {
  const { question } = prop;
  return (
    <div>
      <div className={classes.questions}>
        <h2>{question}</h2>
        <p>Answer comes from ChatGpt API</p>
      </div>
    </div>
  );
};

export default Question;
