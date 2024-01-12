import classes from './DietaryPreference.module.css';
import dietary from '../../../assets/dietary.svg';
import { useState, useContext } from 'react';
import { UserContext } from '../User';

const DietaryPreference = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [dietaryPreference, setDietaryPreference] = useState(
    user.dietaryPreference
  );
  console.log(user);
  const { changeStep } = props;
  const backHanlder = () => {
    console.log('back clicked!');
    changeStep('goal');
  };

  const handleBodyShapeChange = (event) => {
    setDietaryPreference(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(dietaryPreference);
    setUser({ ...user, dietaryPreference });
    changeStep('workout');
  };
  return (
    <div className={classes.dietary}>
      <img src={dietary} alt='body shape' className={classes.img} />
      <form className={classes.form} onSubmit={submitHandler}>
        <h2>What is your dietary preference?</h2>
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
