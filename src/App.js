import './App.css';
import {useState} from "react";

function App() {
  const [show, hide] = useState(false)


  function btn () {
    hide(!show)
  }


  return (
    <div className="App">
      <div style={!show ? {background: 'blue'} : {background: 'green'}} className='wrapper'>
        <div>
          <button onClick={btn} className='blue' style={!show ? {display:'none'} : {display: 'block'}}>blue</button>
        </div>
        <div>
          <button onClick={btn} className='green' style={show ? {display:'none'} : {display: 'block'}}>green</button>
        </div>
      </div>
    </div>
  );
}

export default App;
