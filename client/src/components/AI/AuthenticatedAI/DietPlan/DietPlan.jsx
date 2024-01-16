import classes from './DietPlan.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setDietPlans } from '../../../../redux/userSlice';
import { useState } from 'react';
import brain from '../../../../assets/brain.svg';

const DietPlan = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dietPlans = useSelector((state) => state.user.dietPlans);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/openai', {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInfo: userInfo.information,
          question:
            'Give me a one week detailed and diet plan with amounts.Just include the diet plan in your answer like days: diet, nothing more or less before and end of your response, just a 7 days diet plan.',
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      console.log(data.choices[0].message.content);
      const answer = data.choices[0].message.content;
      if (response.ok && answer) {
        dispatch(setDietPlans({ week: dietPlans.length + 1, diet: answer }));
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };
  return (
    <div className={classes.dietPlansContainer}>
      <div className={classes.header}>
        <button className={classes.requestBtn} onClick={clickHandler}>
          Get your weekly Diet plan!
        </button>
        {isLoading ? (
          <span className={classes.spinner}>
            FitAIM is preparing your Diet plan
            <img src={brain} alt='brain' />
          </span>
        ) : (
          ''
        )}
      </div>
      <div className={classes.dietPlans}>
        {dietPlans.map((diet, index) => {
          return (
            <div className={classes.dietPlan} key={index}>
              <p className={classes.week}>Week {diet.week}</p>
              <div
                className={classes.diet}
                dangerouslySetInnerHTML={{
                  __html: diet.diet.replace(/\n/g, '<br>'),
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DietPlan;
