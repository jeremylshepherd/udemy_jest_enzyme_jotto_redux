import React from 'react'

interface Props {
    guessedWords: {
      guessedWord: string, 
      letterMatchCount: number
    }[]
}

function GuessedWords(props: Props) {
    const { guessedWords } = props;
    let contents : JSX.Element | null = null;
    
    if(guessedWords.length === 0) {
      contents = (
      <span data-jest="guess-instructions">
        Try to guess the secret word 🤞!
      </span>
      );
    } else {
      const guessedWordsRows = 
      guessedWords.map( (item, i) => {
        return (
          <tr key={`${item.guessedWord}${item.letterMatchCount}${i}`} data-jest="guessed-word">
            <td>{item.guessedWord}</td>
            <td>{item.letterMatchCount}</td>
          </tr>
        );
      });
      contents = (
        <div data-jest="guessed-words">
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWordsRows}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div data-jest="component-guessed-words">
        { contents }
      </div>
    );
}

export default GuessedWords
