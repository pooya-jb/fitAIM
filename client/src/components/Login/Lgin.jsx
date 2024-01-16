import classes from './Login.module.css';
import login from '../../assets/login.svg';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated, setUserInfo } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsLoginFormOpen } = props;
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const changeHandler = (e) => {
    // console.log(e.target.name);
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        setError('');
        break;
      case 'password':
        setPassword(e.target.value);
        setError('');
        break;
      default:
        break;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (data.error) {
      setError(data.message);
    }
    if (response.ok) {
      console.log('User logged in');
      dispacth(setAuthenticated(true));
      dispacth(setUserInfo(data.userData));
      navigate('/me');
    }
  };

  return (
    <div className={classes.login}>
      <img className={classes.img} src={login} alt='login' />
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.error}>
          <p>{error}</p>
        </div>
        <label htmlFor='age'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={changeHandler}
          required
        />
        <label htmlFor='height'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={changeHandler}
          required
        />
        <button className={classes.button} type='submit'>
          Login
        </button>
        <p className={classes.noAccount}>Don't have an account?</p>
        <button
          className={classes.signupBtn}
          type='button'
          onClick={() => {
            console.log('signup clicked');
            setIsLoginFormOpen(false);
          }}
        >
          Create your FitAIM account!
        </button>
      </form>
    </div>
  );
};

export default Login;
