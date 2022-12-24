import Header from './components/Header';
import './App.css';
import Characters from './components/characters';
import { useState } from 'react';



function App() {
  const[state,NewState]=useState('');
  return (
    <div className="App">
      <Header NewState={NewState}/>
      <Characters state={state}/>
    </div>
  );
}

export default App;
