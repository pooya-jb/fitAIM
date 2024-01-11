import User from '../User/User';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <div className={`${classes.hero} container`}>
      <div className={classes.moto}>
        <h2>Start your wellness journey with us!</h2>
        <p>
          Input your details, and let AI guide you to a fitter, happier you.{' '}
          <br />
          Take the first step – your future self will thank you.
        </p>
      </div>
      <div className={classes.row}>
        <div className={classes.user}>
          <User />
        </div>
        <div className={classes.AI}>
          <h2>Questions</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
