import classes from './Answer.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Answer = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <div className={classes.answer}>
      {isAuthenticated ? (
        <p>FitAIM is ready to help you!</p>
      ) : (
        <p>
          FitAIM is waiting for you to complete your account!
          {/* <span className={classes.pointer}>|</span> */}
        </p>
      )}
    </div>
  );
};

export default Answer;
