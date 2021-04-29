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
    }
    return (
      <div data-jest="component-guessed-words">
        { contents }
      </div>
    );
}

export default GuessedWords
