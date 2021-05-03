import React from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Jotto Guess-a-Word</h1>
      <Congrats success={true} />
      <Input secretWord={'party'} success={false}/>
      <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3}]} />
    </div>
  );
}

export default App;
