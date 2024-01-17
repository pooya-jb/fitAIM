import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './App.module.css';
import Hero from './components/Hero/Hero';
import UserDashboard from './components/UserDashboard/UserDashboard';

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  useEffect(() => {
    const getRes = async () => {
      const res = await fetch('http://localhost:3000');

      const data = await res.json();
      if (data) {
        console.log('Connected to the server!');
        console.log(data);
      }
    };

    getRes();
  }, []);
  return (
    <Router>
      <div className={classes.app}>
        <Routes>
          <Route
            path='/'
            element={
              <div className={`${classes.hero}`}>
                <Hero />
              </div>
            }
          ></Route>
          <Route
            path='/me'
            element={isAuthenticated ? <UserDashboard /> : <Navigate to='/' />}
          ></Route>
          <Route path='/*' element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
