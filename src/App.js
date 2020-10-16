import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form"
import Clock from "./components/Clock"

function App() {
  const [clocks, setClocks] = useState([{id: 1, zone: 5, name: "Moscow"}]);

  const handleSubmit = (addClock) => {
    setClocks(prevState => [...prevState, addClock]);
  };

  const handleClose = (id) => {
    setClocks(prevState => (prevState.filter(item => item.id !== id)));
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}></Form>
      <div className="clocks_container">
        {clocks.map(item => <Clock key={item.id} item={item} onClose={handleClose}></Clock>)}
      </div>
    </div>
  );
}

export default App;
