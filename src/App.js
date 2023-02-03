import "./App.css";
import React, {useState} from "react";

function App() {

  const [text , setText] = useState("Primery");
  // const name="fa fa-times";
  const name="fa-check";

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
          <i className={name} />
        </span> 

    <h2>{text}</h2>
      </div>
    </div>
  );
}

export default App;
