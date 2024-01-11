import BodyShape from './BodyShape/BodyShape';
import Information from './Information/Inoformation';
import classes from './User.module.css';
import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

const User = () => {
  const [step, setStep] = useState('information');
  const [user, setUser] = useState({
    age: '',
    height: '',
    weight: '',
    gender: '',
    bodyShape: '',
  });
  return (
    <UserContext.Provider className={classes.user} value={{ user, setUser }}>
      {step === 'information' && <Information changeStep={setStep} />}
      {step === 'bodyShape' && <BodyShape changeStep={setStep} />}
    </UserContext.Provider>
  );
};

export default User;
