// src/components/AnswerOptions.jsx
import React from 'react';

const AnswerOptions = ({ options, onAnswer }) => {
    return (
        <div>
            {options.map((option, index) => (
                <button key={index} className="answer-option" onClick={() => onAnswer(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default AnswerOptions;