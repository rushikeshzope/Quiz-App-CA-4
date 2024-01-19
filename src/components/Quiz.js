  import React, { useState } from 'react';
  import questions from '../questions';
  import QuizResult from './QuizResult';



  const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [highlighted, setHighlighted] = useState(false);
    const [isColorToggled, setIsColorToggled] = useState(false);

    const changeQuestion = () => {
      updateScore();
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setClickedOption(0);
        setHighlighted(false);
      } else {
        setShowResult(true);
      }
    };

    const updateScore = () => {
      if (clickedOption === questions[currentQuestion].options.find((option) => option.isCorrect).id) {
        setScore(score + 1);
      }
    };

    const resetAll = () => {
      setShowResult(false);
      setCurrentQuestion(0);
      setClickedOption(0);
      setScore(0);
      setHighlighted(false);
    };

    const handleOptionClick = (optionId) => {
      setClickedOption(optionId);
      changeQuestion();
    };

    const handleHighlight = () => {
      setHighlighted(true);
    };

    const handleRemoveHighlight = () => {
      setHighlighted(false);
    };

    return (
      <div>
        <button>Dark</button>
        <p className="heading-txt">Quiz APP</p>
        <div className="container">
          {showResult ? (
            <QuizResult score={score} totalScore={questions.length} tryAgain={resetAll} />
          ) : (
            <>
              <div className={`question ${highlighted ? 'highlighted' : ''}`}>
                <span id="question-number">{currentQuestion + 1}. </span>
                <span
                  id="question-txt"
                  dangerouslySetInnerHTML={{ __html: questions[currentQuestion].text }}
                ></span>
              </div>
              <div className="option-container">
                {questions[currentQuestion].options.map((option, i) => (
                  <button
                    className={`option-btn ${clickedOption === option.id ? 'checked' : ''}`}
                    key={i}
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
                <button
                  id="button"
                  className="RemoveHighlight-Btn"
                  onClick={handleRemoveHighlight}
                >
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
