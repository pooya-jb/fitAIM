import classes from './UserDashboard.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../../redux/userSlice';
const UserDashboard = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
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
      <h2>Here is user dashboard!</h2>
      <p>Age {userInfo.information.age}</p>
      <p>Height {userInfo.information.height}</p>
      <p>Weight {userInfo.information.weight}</p>
      <p>
        BMI {bmiValue} (Body Mass Index): BMI is a numerical measure that
        assesses body weight in relation to height, providing an indicator of
        potential health risks associated with weight.
      </p>
      <p>
        BMR {bmrValue} (Basal Metabolic Rate): BMR is the number of calories
        your body needs at rest. It helps tailor personalized calorie intake for
        weight management.
      </p>
    </div>
  );
};

export default UserDashboard;
