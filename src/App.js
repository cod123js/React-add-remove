import { useState } from 'react';
import './App.css';

function App() {

  let [counter, asus] = useState(0);

  const add = () => {
    if (counter < 20) {
      asus(counter + 1)
    }
  }

  const remove = () => {
    if (counter > 0) {
      asus(counter - 1)
    }
  }
  return (
    <div className="App">
      <h1>Counter Value: {counter}</h1>

      <button onClick={add}>Add Value</button>
      <br />
      <button onClick={remove}>Remove Value</button>
    </div>
  );
}

export default App;
