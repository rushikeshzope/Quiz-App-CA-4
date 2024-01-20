import React, { useState } from 'react';
import questions from '../questions';
import QuizResult from './QuizResult';
import DarkModeImage from '../Assets/bgimgdark.png';
import LightModeImage from '../Assets/bgimglight.jpg';

const Quiz = () => {
  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  // State variables
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setIsHighlighted(false);
  };

   // Function to handle option click, update score, and navigate to the next question
  const handleOptionClick = (optionId) => {
    const isCorrect = questions[currentQuestion].options.find((option) => option.id === optionId)?.isCorrect;
    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    setCurrentQuestion((prevQuestion) => (prevQuestion < questions.length - 1 ? prevQuestion + 1 : prevQuestion));
    setShowResult(currentQuestion === questions.length - 1);
  };

   // Function to toggle between dark and light mode and update background images
  const toggleBackground = () => {
    setIsDarkBackground((prev) => !prev);
    document.body.style.backgroundImage = isDarkBackground ? `url(${LightModeImage})` : `url(${DarkModeImage})`;
    document.querySelector('.container').style.backgroundImage = isDarkBackground ? `url(${DarkModeImage})` : `url(${LightModeImage})`;
  };

  // Function to highlight the current question
  const handleHighlight = () => {
    setIsHighlighted(true);
  };

  // Function to remove the highlight from the current question
  const removeHighlight = () => {
    setIsHighlighted(false);
  };

  //JSX
  return (
    <div>
      <button id="button" className="ChangeBackground-Btn" onClick={toggleBackground}>
        {isDarkBackground ? 'Light Mode' : 'Dark Mode'}
      </button>
      <p className="heading-txt">Quiz APP</p>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={questions.length} tryAgain={resetQuiz} />
        ) : (
          <>
            <div className={`question ${isHighlighted ? 'highlighted' : ''}`} style={{ color: isHighlighted ? 'red' : 'black' }}>
              <span id="question-number">{currentQuestion + 1}. </span>
              <span>{questions[currentQuestion].text}</span>
            </div>
            <div className="option-container">
              {questions[currentQuestion].options.map((option) => (
                <button
                  className={`option-btn ${isHighlighted && option.isCorrect ? 'checked' : ''}`}
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <div>
              <button id="button" className="Highlight-Btn" onClick={handleHighlight}>
                Highlight
              </button>
              <button id="button" className="RemoveHighlight-Btn" onClick={removeHighlight}>
                Remove Highlight
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
