import classes from './Answer.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Answer = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const questionsAndAnswers = useSelector(
    (state) => state.user.questionsAndAnswers
  );
  return (
    <div className={classes.answer}>
      {!isAuthenticated ? (
        <p>FitAIM is waiting for you!</p>
      ) : (
        <>
          <p>
            {' '}
            FitAIM is ready to help you!
            {/* <span className={classes.pointer}>|</span> */}
          </p>
          <div className={classes.QANDA}>
            <div className={classes.question}>
              <p>{questionsAndAnswers[0]?.question}</p>
              <p>{questionsAndAnswers[0]?.answer}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Answer;
