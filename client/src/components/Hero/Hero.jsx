import AI from '../AI/AI';
import User from '../User/User';
import classes from './Hero.module.css';
import logo from '../../assets/BlackLogo-FitAIM.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated, setUserInfo } from '../../redux/userSlice';
import { useState } from 'react';
import Login from '../Login/Lgin';
import UserDashboard from '../UserDashboard/UserDashboard';
const Hero = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const userInfo = useSelector((state) => state.user.userInfo);

  const dispatch = useDispatch();
  // console.log(isAuthenticated);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  return (
    <div className={`${classes.hero}`}>
      <div className={classes.left}>
        <div className={classes.header}>
          <h2>
            <img className={classes.logo} src={logo} alt='logo FitAIM' />- your
            intelligent fitness assistant, ready to answer your questions and
            guide you through your <span>Fitness Journey</span>.
          </h2>
          <p>
            Answer the questions, and let AI guide you to a fitter, happier you.
            <br />
            Take the first step – your future self will thank you.
          </p>

          <div className={classes.userControl}>
            {isAuthenticated && (
              <div className={classes.authenticated}>
                <p className={classes.welcome}>
                  Welcome {userInfo.name.toUpperCase()}
                </p>
                <button
                  className={classes.logoutBtn}
                  onClick={() => {
                    dispatch(setAuthenticated(false));
                    dispatch(setUserInfo(null));
                  }}
                >
                  Logout
                </button>
              </div>
            )}
            {!isAuthenticated &&
              (isLoginFormOpen ? (
                <div className={classes.signUp}>
                  <span>Don't have an account?</span>
                  <button
                    className={classes.loginBtn}
                    onClick={() => setIsLoginFormOpen(false)}
                  >
                    Create your FitAIM
                  </button>
                </div>
              ) : (
                <div>
                  <span>Already have an account?</span>
                  <button
                    className={classes.loginBtn}
                    onClick={() => setIsLoginFormOpen(true)}
                  >
                    Login
                  </button>
                </div>
              ))}
          </div>
        </div>
        {!isAuthenticated && (
          <div className={classes.row}>
            {isLoginFormOpen ? (
              <div className={classes.login}>
                <Login setIsLoginFormOpen={setIsLoginFormOpen} />
              </div>
            ) : (
              <div className={classes.user}>
                <User />
              </div>
            )}
          </div>
        )}
        {isAuthenticated && <UserDashboard />}
      </div>

      <div className={classes.right}>
        <div className={classes.AI}>
          <AI />
        </div>
      </div>
    </div>
  );
};

export default Hero;
