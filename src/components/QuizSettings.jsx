// src/components/QuizSettings.jsx
import React, { useState } from 'react';
import './QuizSettings.css';

const QuizSettings = ({ onStartQuiz }) => {
    const [numQuestions, setNumQuestions] = useState(10);
    const [difficulty, setDifficulty] = useState('medium');

    const handleStartQuiz = () => {
        onStartQuiz(numQuestions, difficulty);
    };

    return (
        <div className="quiz-settings">
            <h2>Quiz Settings</h2>
            <label>
                Number of Questions:
                <input
                    type="number"
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(e.target.value)}
                    min="1"
                    max="50"
                />
            </label>
            <label>
                Difficulty:
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
            <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
    );
};

export default QuizSettings;