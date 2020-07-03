import React from "react";
import styles from "./Form.module.css"
import { Button, Card } from 'react-bootstrap';

//keeping this for reference - plain button 
function FormPlain(props) {
  const options = ["trivia", "math", "year"];

  return (
  <form className="form">
    <div>
      <input onChange={props.handleChange} type="text" value={props.number}/>
    </div>
    {options.map(option => (
      <button value={option} onClick={props.getFact}>
        Get {option}
      </button>
      ) 
      )}  
  </form>
  )
};

function Form(props) {
  const options = ["trivia", "math", "year"];

  return (  
    <div>
      <input placeholder="input a number!" className={styles.inputfield} onChange={props.changeNumber} type="text" value={props.number}/>

      <div>
        <Button value="trivia" onClick={props.getFact} variant="success" size="l">
          Get triva
        </Button>{' '}
        <Button value="math" onClick={props.getFact} variant="info" size="l">
          Get math
        </Button>{' '}
        <Button value="year" onClick={props.getFact} variant="secondary" size="l">
          Get year
        </Button>{' '}
      </div>
   </div>
  )
};


export default Form; 