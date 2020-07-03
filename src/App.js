import React, {useState, useEffect} from "react";
import axios from "axios";
import Form from "./components/Form";
import { Button, Card } from 'react-bootstrap';
import styles from "./App.module.css"

function App() {

  //state with the returned facts 
  const [fact, setFact] = useState("");
  //state with the selected number 
  const [number, setNumber] = useState("0");
  //state with type of facts 
  const [output, setOutput] = useState("trivia");

    //fetch the data 
    const fetchNumberFacts = async (num, outp) => {
      const selectedApi = `http://numbersapi.com/${num}/${outp}`
      try {
        const {data} = await axios.get(selectedApi);
        return data;     
      } catch (error) {
        console.log(error)    
      }
    };

  //display fact every time output type changes 
  useEffect(() => {
    async function getData() {
      const data = await fetchNumberFacts(number, output);
      setFact(data);
    }
    getData();
    return function cleanup(){
      setOutput("");
    }
    }, [output]);


  //change number based on input (onChange in input field)
  function changeNumber(event){
    setNumber(event.target.value);
  };

  //update fact to be displayed based on current value of number (button click)
  async function getFact(event){
    setOutput(event.target.value);
  }

  return(
    <div className={styles.app}>
          <Card className={styles.card} bg={"light"} text={"dark"} style={{ width: '28rem' }}>
              <Card.Header as="h5">What a lovely number {!number? "this mystery number": number } is!</Card.Header>
              <Card.Body>
                <Card.Text>{fact}</Card.Text>
                <Form 
                  changeNumber={changeNumber}
                  getFact={getFact}
                  number={number}
                />
              </Card.Body>
            </Card>
    </div>
  )
};

export default App; 