import "./App.css";
import React, {Component, useMemo, useState} from "react";
import { render } from "react-dom";

function App() {

  const [text , setText] = useState("");

  

  const number=useMemo( () => {
      if (text.match(/^[0-9]+$/)) {return 'fas fa-check'}

      return 'fas fa-times'
  },[text]);


  // const name="fa fa-times";
  // const name="fa-check";

  

  return (
    <div className="App">
     <div className="control has-icons-right">
        
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={e => setText(e.target.value)}

        />


        <span className="icon is-small is-right">
          <i className={number} />
        </span> 

   
   
      </div>
    </div>
  );
}

export default App;
