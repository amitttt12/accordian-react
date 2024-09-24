
import './App.css';
import Accordion from './components/accordian';
import { useState } from 'react';
import data from './components/accordian/data';

function App() {

  // const [selected, setSelected] = useState(null)
  return (
    <div className="App">

      <h1>Accordion</h1>
      <Accordion data={data} />
    </div>
  );
}

export default App;
