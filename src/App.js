import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Figure from './Components/Figure';
import WrongLetters from './Components/WrongLetters';
import Word from './Components/Word';

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  
  return (
    <div>
      <Header />
      <div className='game-containter'>
        <Figure />
        <WrongLetters />
        <Word />
        <div>Testings</div>
      </div>
      
    </div>
  );
}

export default App;
