import React from 'react';

function QuizResult(props) {
  return (
    <>
      <div className='show-score'>
        <span>Your Score:</span>{props.score}<br />
        <span>Total Score:</span>{props.totalScore} <br />
        <span>Percentage:</span>{props.score / props.totalScore * 100} %
      </div>
      <button id="button" onClick={props.tryAgain}>Try Again</button>
    </>
  );
}

export default QuizResult;
