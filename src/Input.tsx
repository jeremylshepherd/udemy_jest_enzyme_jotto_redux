import React, { useState } from 'react'

interface Props {
    secretWord: string,
    success: boolean
}

function Input(props: Props) {
    const [ currentGuess, setCurrentGuess ] = useState<string>('');
    const { secretWord, success } = props;

    if(success) {
        return <div data-jest="component-input"/>;
    }

    return (
        <div data-jest="component-input">
            <form className="form-inline">
                <input 
                    data-jest="input-box" 
                    className="mb2 mx-sm-3" 
                    type="text"
                    placeholder="Enter guess"
                    value={currentGuess}
                    onChange={e => setCurrentGuess(e.target.value)}
                    />
                    <button 
                        type="submit"
                        disabled={currentGuess.length < 1}
                        className="btn btn-primary mb-2" 
                        data-jest="submit-button"
                        onClick={(e) => {
                            e.preventDefault();
                            // ⚠ updateGuessed Words
                            // ⚠ check aginst secret word to update success
                            setCurrentGuess("");
                        }}
                        >
                        Submit
                    </button>
            </form>
        </div>
    )
}   

export default Input
