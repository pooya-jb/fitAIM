import classes from './User.module.css';

const User = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='age'>Age</label>
      <input type='number' name='age' id='age' min={1} max={120} />
      <label htmlFor='height'>Height</label>
      <input type='number' name='height' id='height' min={50} max={250} />
      <label htmlFor='weight'>Weight</label>
      <input type='number' name='weight' id='weight' min={3} max={300} />
      <label htmlFor='gender'>Gender</label>
      <select name='gender' id='gender'>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
      </select>
    </form>
  );
};

export default User;
