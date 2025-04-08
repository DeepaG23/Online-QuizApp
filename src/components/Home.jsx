// src/components/Home.jsx
import React from 'react';

const Home = ({ username }) => {
    return (
        <div className="home-container">
            <h1>Welcome, {username}!</h1>
            <p>Get ready to test your knowledge with our quiz!</p>
            <a href="/quiz">
                <button className="start-quiz-button">Start Quiz</button>
            </a>
        </div>
    );
};

export default Home;