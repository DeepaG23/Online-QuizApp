// src/components/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
    return (
        <div className="progress-bar">
            <div
                className="progress"
                style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            />
        </div>
    );
};

export default ProgressBar;