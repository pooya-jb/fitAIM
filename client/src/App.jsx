import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';

import classes from './App.module.css';
import Hero from './components/Hero/Hero';

function App() {
  const [res, setRes] = useState('');
  useEffect(() => {
    const getRes = async () => {
      const res = await fetch('http://localhost:3000');

      const data = await res.json();
      console.log(data);
      setRes(data);
    };

    getRes();
  }, []);
  return (
    <div className={classes.app}>
      {/* <div className={classes.navbar}>
        <Navbar />
      </div>
      <p>Hey{res}</p> */}
      <div className={`${classes.hero}`}>
        <Hero />
      </div>
    </div>
  );
}

export default App;
