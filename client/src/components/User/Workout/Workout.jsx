import classes from './Workout.module.css';
import workoutpic from '../../../assets/workout.svg';
import { useState, useContext } from 'react';
import { UserContext } from '../User';

const Workout = () => {
  const { user, setUser, setStep } = useContext(UserContext);
  const [workout, setWorkout] = useState(user.information.workout);
  console.log(user);
  const backHanlder = () => {
    // console.log('back clicked!');
    setStep('dietaryPreference');
  };

  const handleBodyShapeChange = (event) => {
    setWorkout(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(workout);
    setUser({ ...user, information: { ...user.information, workout } });
    setStep('register');
    // console.log(user);
  };
  return (
    <div className={classes.workout}>
      <img src={workoutpic} alt='workout' className={classes.img} />
      <form className={classes.form} onSubmit={submitHandler}>
        <p className={classes.question}>Where do you prefer to workout?</p>
        <label>
          <input
            type='radio'
            name='workout'
            value='home'
            checked={workout === 'home'}
            onChange={handleBodyShapeChange}
            required
          />
          Home
        </label>

        <label>
          <input
            type='radio'
            name='workout'
            value='gym'
            checked={workout === 'gym'}
            onChange={handleBodyShapeChange}
          />
          Gym
        </label>
        <label>
          <input
            type='radio'
            name='workout'
            value='outdoor activity like walking and running'
            checked={workout === 'outdoor activity like walking and running'}
            onChange={handleBodyShapeChange}
          />
          Outdoor activity like walking and running
        </label>

        <div className={classes.btns}>
          <button
            className={classes.submitBtn}
            type='button'
            onClick={backHanlder}
          >
            Back
          </button>
          <button className={classes.submitBtn} type='submit'>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Workout;
