import React from 'react'

interface Props {
    secretWord: string
}

function Input(props: Props) {
    const [ currentGuess, setCurrentGuess ] = React.useState('');
    const { secretWord } = props;

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
                        className="btn btn-primary mb-2" 
                        data-jest="submit-button">
                        Submit
                    </button>
            </form>
        </div>
    )
}

export default Input
