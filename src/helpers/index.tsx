/**
 * @method getLetterMatchCount
 * @param {string} guessedWord 
 * @param {string} secretWord 
 * @returns {number} - Number of letter matched between guessed word and the secret word.
 */

export function getLetterMatchCount(guessedWord : string, secretWord : string) : number {
    const secretLetters : string[] = secretWord.split('');
    const guessedLettersSet = new Set(guessedWord);
    return secretLetters.filter(letter => guessedLettersSet.has(letter)).length;
}