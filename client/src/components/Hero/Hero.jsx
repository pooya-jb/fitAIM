import AI from '../AI/AI';
import User from '../User/User';
import classes from './Hero.module.css';
import logo from '../../assets/BlackLogo-FitAIM.svg';

const Hero = () => {
  return (
    <div className={`${classes.hero}`}>
      <div className={classes.left}>
        <div className={classes.moto}>
          <h2>
            Leverage the power of
            <img className={classes.logo} src={logo} alt='logo FitAIM' />
            to lead you on your fitness journey!
          </h2>
          <p>
            Enter your details, and let AI guide you to a fitter💪 happier
            you.😊
            <br />
            Take the first step – your future self will thank you.
          </p>
        </div>
        <div className={classes.row}>
          <div className={classes.user}>
            <User />
          </div>
        </div>
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
