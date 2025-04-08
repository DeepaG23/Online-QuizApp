// src/components/Result.jsx
import React from 'react';
import './Result.css';

const Result = ({ score, totalQuestions }) => {
    return (
        <div className="result-container">
            <h1>Your Results</h1>
            <p>You scored {score} out of {totalQuestions}!</p>
            <button className="retry-button">Retry Quiz</button>
        </div>
    );
};

export default Result;