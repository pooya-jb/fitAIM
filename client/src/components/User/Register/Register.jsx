import classes from './Register.module.css';
import { useContext } from 'react';
import { UserContext } from '../User';
import resgister from '../../../assets/register.svg';

const Register = () => {
  const { user, setUser, setStep } = useContext(UserContext);
  console.log(user);

  const changeHandler = (e) => {
    // console.log(e.target.name);
    switch (e.target.name) {
      case 'email':
        setUser({ ...user, email: e.target.value });
        break;
      case 'password':
        setUser({ ...user, password: e.target.value });
        break;
      case 'name':
        setUser({ ...user, name: e.target.value });
        break;
      default:
        break;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setStep('information');
    }
  };

  return (
    <div className={classes.register}>
      <img
        className={classes.img}
        src={resgister}
        alt='complete creating account'
      />
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='age'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={user.email}
          onChange={changeHandler}
          required
        />
        <label htmlFor='height'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={user.password}
          onChange={changeHandler}
          required
        />
        <label htmlFor='weight'>Name</label>
        <input
          type='name'
          name='name'
          id='name'
          value={user.name}
          onChange={changeHandler}
          required
        />
        <button className={`${classes.button}`} type='submit'>
          Create my FitAIM account
        </button>
        <div className={classes.edit}>
          <p>Edit the information ?</p>
          <button className={classes.infoBtn} type='button'>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
