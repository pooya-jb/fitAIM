import classes from './Question.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestionsAndAnswers } from '../../../redux/userSlice';
import { useState } from 'react';
const Question = (prop) => {
  const { question } = prop;
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const clickHandler = async () => {
    if (!isAuthenticated) {
      console.log('Please login or create your FitAIM');
      setError('👈Please login or register!');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/openai', {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInfo: userInfo.information,
          question: question,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      console.log(data.choices[0].message.content);
      const answer = data.choices[0].message.content;
      if (response.ok) {
        dispatch(setQuestionsAndAnswers({ question, answer }));
      }
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
        <p
          className={`${classes.error} ${
            !isAuthenticated ? classes.show : ''
          } `}
        >
          {error}
        </p>
      </div>
    </div>
  );
};

export default Question;
