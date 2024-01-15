import classes from './Goal.module.css';
import goalMale from '../../../assets/goal-male.svg';
import goalFemale from '../../../assets/goal-female.svg';
import { useState, useContext } from 'react';
import { UserContext } from '../User';
const Goal = () => {
  const { user, setUser, setStep } = useContext(UserContext);
  const [goal, setGoal] = useState(user.information.goal);
  console.log(user);
  const backHanlder = () => {
    console.log('back clicked!');
    setStep('bodyShape');
  };

  const handleBodyShapeChange = (event) => {
    setGoal(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(goal);
    setUser({ ...user, information: { ...user.information, goal } });
    setStep('dietaryPreference');
  };
  return (
    <div className={classes.goal}>
      <img
        src={user.information.gender === 'male' ? goalMale : goalFemale}
        alt='body shape'
        className={classes.goalImg}
      />
      <form className={classes.form} onSubmit={submitHandler}>
        <p className={classes.question}>What is your FitAIM?</p>
        <label>
          <input
            type='radio'
            name='goal'
            value='weight loss'
            checked={goal === 'weight loss'}
            onChange={handleBodyShapeChange}
            required
          />
          Weight Loss
          <p>
            Appropriate for individuals aiming to reduce body weight or fat
            mass.
          </p>
        </label>

        <label>
          <input
            type='radio'
            name='goal'
            value='muscle gain'
            checked={goal === 'muscle gain'}
            onChange={handleBodyShapeChange}
          />
          Muscle Gain
          <p>
            Suitable for those looking to increase muscle mass and strength.
          </p>
        </label>
        <label>
          <input
            type='radio'
            name='goal'
            value='general fitness'
            checked={goal === 'general fitness'}
            onChange={handleBodyShapeChange}
          />
          General Fitness
          <p>
            Broadly covers overall fitness and well-being, encompassing various
            aspects like strength, endurance, and flexibility.
          </p>
        </label>

        <label>
          <input
            type='radio'
            name='goal'
            value='cardiovascular health'
            checked={goal === 'cardiovascular health'}
            onChange={handleBodyShapeChange}
          />
          Cardiovascular Health
          <p>
            Focuses on improving the health of the heart and circulatory system
            through aerobic exercises.
          </p>
        </label>

        <label>
          <input
            type='radio'
            name='goal'
            value='flexibility improvement'
            checked={goal === 'flexibility improvement'}
            onChange={handleBodyShapeChange}
          />
          Flexibility Improvement
          <p>
            Targets enhancing the range of motion and suppleness of muscles and
            joints.
          </p>
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

export default Goal;
