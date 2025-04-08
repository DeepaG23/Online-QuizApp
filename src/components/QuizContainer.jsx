// src/components/QuizContainer.jsx
import React, { useEffect, useState } from 'react';
import Question from './Question';
import AnswerOptions from './AnswerOptions';
import NavigationButtons from './NavigationButtons';
import ProgressBar from './ProgressBar';
import ScoreDisplay from './ScoreDisplay';
import QuizSettings from './QuizSettings';

const QuizContainer = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);
    const [numQuestions, setNumQuestions] = useState(10);
    const [difficulty, setDifficulty] = useState('medium');

    const fetchQuestions = async (amount, difficulty) => {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`);
        const data = await response.json();
        setQuestions(data.results);
    };

    const handleStartQuiz = (amount, difficulty) => {
        setNumQuestions(amount);
        setDifficulty(difficulty);
        fetchQuestions(amount, difficulty);
        setQuizStarted(true);
    };

    const handleAnswer = (selectedOption) => {
        const correctAnswer = questions[currentQuestionIndex].correct_answer;
        if (selectedOption === correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    if (!quizStarted) {
        return <QuizSettings onStartQuiz={handleStartQuiz} />;
    }

    if (quizFinished) {
        return <ScoreDisplay score={score} total={questions.length} />;
    }

    return (
        <div>
            <ProgressBar currentQuestion={currentQuestionIndex + 1} totalQuestions={questions.length} />
            {questions.length > 0 && (
                <>
                    <Question question={questions[currentQuestionIndex].question} />
                    <AnswerOptions
                        options={[...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer]}
                        onAnswer={handleAnswer}
                    />
                    <NavigationButtons onNext={handleNext} onPrevious={handlePrevious} isLastQuestion={currentQuestionIndex === questions.length - 1} />
                </>
            )}
        </div>
    );
};

export default QuizContainer;