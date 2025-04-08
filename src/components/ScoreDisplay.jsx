// src/components/ScoreDisplay.jsx
import React from 'react';

const ScoreDisplay = ({ score, total }) => {
    return (
        <div className="score">
            <h2>Your Score: {score} out of {total}</h2>
        </div>
    );
};

export default ScoreDisplay;