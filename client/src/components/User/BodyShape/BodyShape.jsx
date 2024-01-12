import classes from './BodyShape.module.css';
import maleBodyShape from '../../../assets/male-svg.svg';
import femaleBodyShape from '../../../assets/female-svg.svg';
import { useState, useContext } from 'react';
import { UserContext } from '../User';

const BodyShape = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [bodyShape, setBodyShape] = useState(user.bodyShape);
  console.log(user);
  const { changeStep } = props;
  const backHanlder = () => {
    console.log('back clicked!');
    changeStep('information');
  };

  const handleBodyShapeChange = (event) => {
    setBodyShape(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(bodyShape);
    setUser({ ...user, bodyShape });
    changeStep('goal');
  };
  return (
    <div className={classes.bodyShape}>
      <h2>Which one describes your body shape better?</h2>
      <img
        src={user.gender === 'male' ? maleBodyShape : femaleBodyShape}
        alt='body shape'
        className={classes.bodyShapeImg}
      />
      <form className={classes.form} onSubmit={submitHandler}>
        <label>
          <input
            type='radio'
            name='bodyShape'
            value='hourglass'
            checked={bodyShape === 'hourglass'}
            onChange={handleBodyShapeChange}
            required
          />
        </label>

        <label>
          <input
            type='radio'
            name='bodyShape'
            value='rectangle'
            checked={bodyShape === 'rectangle'}
            onChange={handleBodyShapeChange}
          />
        </label>
        <label>
          <input
            type='radio'
            name='bodyShape'
            value='pear'
            checked={bodyShape === 'pear'}
            onChange={handleBodyShapeChange}
          />
        </label>

        <label>
          <input
            type='radio'
            name='bodyShape'
            value='apple'
            checked={bodyShape === 'apple'}
            onChange={handleBodyShapeChange}
          />
        </label>

        <label>
          <input
            type='radio'
            name='bodyShape'
            value='inverted triangle'
            checked={bodyShape === 'inverted triangle'}
            onChange={handleBodyShapeChange}
          />
        </label>
        <div className={classes.btns}>
          <button
            className={classes.submitBtn}
            type='button'
            onClick={backHanlder}
          >
            Back
          </button>
          <button className={classes.submitBtn} type='submit'>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BodyShape;
