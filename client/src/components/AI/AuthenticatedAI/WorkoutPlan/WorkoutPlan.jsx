import classes from './WorkoutPlan.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setWorkoutPlans } from '../../../../redux/userSlice';
import { useState } from 'react';
import brain from '../../../../assets/brain.svg';

const WorkoutPlan = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const workoutPlans = useSelector((state) => state.user.workoutPlans);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
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
            'Give me a one week detailed workout plan with the number of sets and repitions which takes almost 45 minutes.Just include the extra tips at the end of the plan, but make them short.',
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
        dispatch(
          setWorkoutPlans({ week: workoutPlans.length + 1, workout: answer })
        );
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };
  return (
    <div className={classes.workoutPlansContainer}>
      <div className={classes.header}>
        <button className={classes.requestBtn} onClick={clickHandler}>
          Get your weekly Workout plan!
        </button>
        {isLoading ? (
          <span className={classes.spinner}>
            FitAIM is preparing your Workout plan
            <img src={brain} alt='brain' />
          </span>
        ) : (
          ''
        )}
      </div>
      <div className={classes.workoutPlans}>
        {workoutPlans?.map((workout, index) => {
          return (
            <div className={classes.workoutPlan} key={index}>
              <p className={classes.week}>Week {workout.week}</p>
              <div
                className={classes.workout}
                dangerouslySetInnerHTML={{
                  __html: workout.workout.replace(/\n/g, '<br>'),
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutPlan;
