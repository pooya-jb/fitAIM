import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={`${classes.navbar} container`}>
      <div className={classes.logo}>FitAIM</div>
      <div className={classes.nav}>
        <ul>
          <li>Home</li>
          <li>User</li>
          <li>Results</li>
        </ul>
        <div className={classes.CTA}>
          <div className={classes.login}>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
