import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(true)             //  set boolean to trigger style

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      //alert ("Goal can not be empty !")
      setIsValid(false)
    }
    else{
      props.onAddGoal(enteredValue);
    }
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: isValid?'green':'red'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
