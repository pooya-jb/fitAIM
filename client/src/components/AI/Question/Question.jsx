import classes from './Question.module.css';
const Question = (prop) => {
  const { question } = prop;
  const clickHandler = async () => {
    try {
      const response = await fetch('http://localhost:3000/openai', {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: 'actual question' }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error', error);
    }
  };
  return (
    <div>
      <div className={classes.question}>
        <button className={classes.questionBtn} onClick={clickHandler}>
          {question}
        </button>
      </div>
    </div>
  );
};

export default Question;
