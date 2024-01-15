import BodyShape from './BodyShape/BodyShape';
import DietaryPreference from './DietaryPreference/DietaryPreference';
import Goal from './Goal/Goal';
import Information from './Information/Inoformation';
import classes from './User.module.css';
import { useState } from 'react';
import { createContext } from 'react';
import Workout from './Workout/Workout';
import Register from './Register/Register';

export const UserContext = createContext();

const User = () => {
  const [step, setStep] = useState('information');
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    information: {
      age: '',
      height: '',
      weight: '',
      gender: '',
      bodyShape: '',
      goal: '',
      dietaryPreference: '',
      workout: '',
    },
  });
  return (
    <UserContext.Provider
      className={classes.user}
      value={{ user, setUser, setStep }}
    >
      {step === 'information' && <Information changeStep={setStep} />}
      {step === 'bodyShape' && <BodyShape changeStep={setStep} />}
      {step === 'goal' && <Goal changeStep={setStep} />}
      {step === 'dietaryPreference' && (
        <DietaryPreference changeStep={setStep} />
      )}
      {step === 'workout' && <Workout changeStep={setStep} />}
      {step === 'register' && <Register />}
    </UserContext.Provider>
  );
};

export default User;
