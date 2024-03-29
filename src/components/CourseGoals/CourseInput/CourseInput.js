import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [IsValid, setIsValid] = useState(true);

 

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  // const handleClick= (event)=> {
  //   if(enteredValue.trim().length === 0){
  //     setIsValid(false)
  //   }
  // };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control' >
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      
      <Button type="submit" style={{background : !IsValid ? '#fb899a' : ''}} >Add Goal</Button>
     
    </form>
  );
};

export default CourseInput;
