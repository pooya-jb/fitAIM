import classes from './Answer.module.css';
import { useState } from 'react';

const Answer = () => {
  return (
    <div className={classes.answer}>
      <p>
        Answer from AI comes here!<span className={classes.pointer}>|</span>
      </p>
    </div>
  );
};

export default Answer;
