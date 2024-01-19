import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore} <br/>
        Percentage:{props.score/props.totalScore*100} %
    </div>
    <button id="button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult 