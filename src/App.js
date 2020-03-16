import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiceCard from "./components/ChoiceCard";

function App() {
  return (
    <div className="App">
      <ChoiceCard title="You" winner={false}      />
      <ChoiceCard title="Computer" winner={true} />
    </div>
  );
}

export default App;
