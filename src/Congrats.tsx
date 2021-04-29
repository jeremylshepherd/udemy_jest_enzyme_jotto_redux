import React from 'react';

/**
 * Functional React component for congratulatory message.
 * @function
 * @param {object} props
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */

export default function Congrats({ success } : { success : boolean }) : JSX.Element {
    return (
        <div data-jest="component-congrats">
            {success ?
                <span data-jest="congrats-message">
                    Congratulations! You guessed the word!
                </span>:
                null
        }
        </div>
    );
}