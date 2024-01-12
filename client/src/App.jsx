import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

import classes from './App.module.css';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={`${classes.hero}`}>
        <Hero />
      </div>
    </div>
  );
}

export default App;
