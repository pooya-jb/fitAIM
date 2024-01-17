import classes from './Answer.module.css';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

const Answer = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const questionsAndAnswers = useSelector(
    (state) => state.user.questionsAndAnswers
  );

  const chatRef = useRef();
  useEffect(() => {
    // console.log('Q&A added');
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [questionsAndAnswers]);
  return (
    <div className={classes.chat} ref={chatRef}>
      {!isAuthenticated ? (
        <p className={classes.pleaseLogin}>
          FitAIM is waiting for you, login or create your account!
        </p>
      ) : (
        <>
          {!questionsAndAnswers.length ? (
            <p className={classes.ready}>
              {' '}
              FitAIM is ready to help you!
              {/* <span className={classes.pointer}>|</span> */}
            </p>
          ) : (
            <div className={classes.QandAs}>
              {questionsAndAnswers.map((qnada, index) => {
                return (
                  <div key={index} className={classes.qanda}>
                    <p className={classes.question}>{qnada.question}</p>
                    <p className={classes.answer}>{qnada.answer}</p>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Answer;
