import classes from './DietaryPreference.module.css';
import dietary from '../../../assets/dietary.svg';
import { useState, useContext } from 'react';
import { UserContext } from '../User';

const DietaryPreference = () => {
  const { user, setUser, setStep } = useContext(UserContext);
  const [dietaryPreference, setDietaryPreference] = useState(
    user.information.dietaryPreference
  );
  console.log(user);
  const backHanlder = () => {
    console.log('back clicked!');
    setStep('goal');
  };

  const handleBodyShapeChange = (event) => {
    setDietaryPreference(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(dietaryPreference);
    setUser({
      ...user,
      information: { ...user.information, dietaryPreference },
    });
    setStep('workout');
  };
  return (
    <div className={classes.dietary}>
      <img src={dietary} alt='body shape' className={classes.img} />
      <form className={classes.form} onSubmit={submitHandler}>
        <p className={classes.question}>What is your dietary preference?</p>
        <label>
          <input
            type='radio'
            name='dietary'
            value='omnivore'
            checked={dietaryPreference === 'omnivore'}
            onChange={handleBodyShapeChange}
            required
          />
          Omnivore
        </label>

        <label>
          <input
            type='radio'
            name='dietary'
            value='vegeterian'
            checked={dietaryPreference === 'vegeterian'}
            onChange={handleBodyShapeChange}
          />
          Vegeterian
        </label>
        <label>
          <input
            type='radio'
            name='dietary'
            value='vegan'
            checked={dietaryPreference === 'vegan'}
            onChange={handleBodyShapeChange}
          />
          Vegan
        </label>

        <label>
          <input
            type='radio'
            name='dietary'
            value='gluten-free'
            checked={dietaryPreference === 'gluten-free'}
            onChange={handleBodyShapeChange}
          />
          Gluten-Free
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

export default DietaryPreference;
