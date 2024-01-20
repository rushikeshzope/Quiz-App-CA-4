import React from 'react';

// Functional component for displaying quiz results
function QuizResult(props) {
  const percentage = (props.score / props.totalScore) * 100;

  return (
    <>
      <div className='show-score'>
        <span>Your Score: </span>{props.score}<br />
        <span>Total Score: </span>{props.totalScore} <br />
        <span>Percentage: </span>{percentage}%
      </div>
      <button id="button" onClick={props.tryAgain}>Try Again</button>
    </>
  );
}

export default QuizResult;