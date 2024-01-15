import classes from './Information.module.css';
import { useState, useContext } from 'react';
import { UserContext } from '../User';
import information from '../../../assets/information.svg';

const Information = () => {
  const { user, setUser, setStep } = useContext(UserContext);
  const [age, setAge] = useState(user.information.age);
  const [height, setHeight] = useState(user.information.height);
  const [weight, setWeight] = useState(user.information.weight);
  const [gender, setGender] = useState(user.information.gender);

  const changeHandler = (e) => {
    // console.log(e.target.name);
    switch (e.target.name) {
      case 'age':
        setAge(e.target.value);
        break;

      case 'height':
        setHeight(e.target.value);
        break;
      case 'weight':
        setWeight(e.target.value);
        break;
      case 'gender':
        setGender(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log({
    //   age,
    //   height,
    //   weight,
    //   gender,
    // });
    setStep('bodyShape');
    setUser({ ...user, information: { age, height, weight, gender } });
  };

  return (
    <div className={classes.information}>
      <img className={classes.img} src={information} alt='sport' />

      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          id='age'
          min={1}
          max={120}
          value={age}
          onChange={changeHandler}
          required
        />
        <label htmlFor='height'>Height</label>
        <input
          type='number'
          name='height'
          id='height'
          min={50}
          max={250}
          value={height}
          onChange={changeHandler}
          required
        />
        <label htmlFor='weight'>Weight</label>
        <input
          type='number'
          name='weight'
          id='weight'
          min={3}
          max={300}
          value={weight}
          onChange={changeHandler}
          required
        />
        <label htmlFor='gender'>Gender</label>
        <select
          name='gender'
          id='gender'
          value={gender}
          onChange={changeHandler}
          required
        >
          <option value=''>Select Gender</option>
          <option value='female'>Female</option>
          <option value='male'>Male</option>
        </select>
        <button className={classes.submitBtn} type='submit'>
          Next
        </button>
      </form>
    </div>
  );
};

export default Information;
