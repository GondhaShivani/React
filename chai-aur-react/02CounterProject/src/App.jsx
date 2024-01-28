import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);
  //let counter = 1;

  const addValue = () => {
    if (counter !== 20) {
      setCounter(counter + 1);
    } else {
      alert("you can not increase value more than 20 !!");
    }
  };

  const removeValue = () => {
    //console.log(counter);
    if (counter !== 0) {
      setCounter(counter - 1);
    } else {
      alert("you can not decrease value more than 0 !!");
    }
  };

  return (
    <>
      <div>
        <h1>Hello in Counter Project</h1>
        <h2>counter value = {counter}</h2>
        <div id="button">
          <button onClick={addValue}>Increase Value</button>
          <br></br>
          <br></br>
          <button onClick={removeValue}>Decrease Value</button>
        </div>
      </div>
    </>
  );
}

export default App;
