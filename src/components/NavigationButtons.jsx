// src/components/NavigationButtons.jsx
import React from 'react';
import './NavigationButtons.css'; // Ensure the path is correct

const NavigationButtons = ({ onNext, onPrevious, isLastQuestion }) => {
    return (
        <div className="navigation-buttons">
            <button onClick={onPrevious} disabled={isLastQuestion}>
                Previous
            </button>
            <button onClick={onNext}>
                Next
            </button>
        </div>
    );
};

export default NavigationButtons;