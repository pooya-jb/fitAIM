import classes from './UserDashboard.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthenticated } from '../../redux/userSlice';
import AI from '../AI/AI';
import DietPlan from '../AI/AuthenticatedAI/DietPlan/DietPlan';
import WorkoutPlan from '../AI/AuthenticatedAI/WorkoutPlan/WorkoutPlan';
const UserDashboard = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  console.log(userInfo);
  let weight = 60;
  let height = 160;
  let age = 25;
  if (userInfo) {
    weight = userInfo.information.weight;
    height = userInfo.information.height;
    age = userInfo.information.age;
  }

  let bmrValue = 0;

  if (userInfo.information.gender === 'male') {
    bmrValue = (
      88.362 +
      13.397 * weight +
      4.799 * height -
      5.677 * age
    ).toFixed(0);
  } else {
    bmrValue = (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age).toFixed(
      0
    );
  }

  let bmiValue;
  if (userInfo.information.weight) {
    bmiValue = (weight / (((height / 100) * height) / 100)).toFixed(2);
    console.log(bmiValue);
  }

  return (
    <div className={classes.userDashboard}>
      <div className={classes.userInfo}>
        <div className={classes.userControl}>
          <p>Welcome {userInfo.name.toUpperCase()}</p>
          <button
            className={classes.logoutBtn}
            onClick={() => {
              dispatch(setAuthenticated(false));
            }}
          >
            Logout
          </button>
        </div>
        <div className={classes.info}>
          <p>Age {userInfo.information.age}</p>
          <p>Height {userInfo.information.height}</p>
          <p>Weight {userInfo.information.weight}</p>
          <p>
            BMI: {bmiValue}
            <p className={classes.explain}>
              (Body Mass Index) BMI is a numerical measure that assesses body
              weight in relation to height, providing an indicator of potential
              health risks associated with weight.
            </p>
          </p>
          <p>
            BMR: {bmrValue} Kcal
            <p className={classes.explain}>
              (Basal Metabolic Rate): BMR is the number of calories your body
              needs at rest. It helps tailor personalized calorie intake for
              weight management.
            </p>
          </p>
        </div>
      </div>
      <div className={classes.AI}>
        <div className={classes.tabs}>
          <div className={classes.dietTab}>
            <h2>Diet</h2>
            <DietPlan />
          </div>
          <div className={classes.workoutTab}>
            <h2>Workout</h2>
            <WorkoutPlan />
          </div>
          <div className={classes.tipsTab}>
            <AI />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
