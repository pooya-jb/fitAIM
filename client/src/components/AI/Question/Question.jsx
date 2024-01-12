import classes from './Question.module.css';
const Question = (prop) => {
  const { question } = prop;
  return (
    <div>
      <div className={classes.questions}>
        <h2 className={classes.question}>{question}</h2>
      </div>
    </div>
  );
};

export default Question;
