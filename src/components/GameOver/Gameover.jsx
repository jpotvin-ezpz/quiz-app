import React from 'react';
import resultsImg from '../../resources/undraw_winners_ao2o 2.svg';

function Gameover({score, roundMax, handleTryAgain}) {
  return (
    <div className='gameover'>
          <h1 className='quiz-title'>Country Quiz</h1>
          <div className='quiz-wrapper result-page'>
            <div className='results-img--wrapper'>
              <img className='results-img' src={resultsImg} alt=''/>
            </div>
            <h2 className='results'>Results</h2>
            <p className='score-sum'>You got <span>{score}/{roundMax}</span> answers correct</p>
            {/* 
              //todo
            <div>
              <button 
                className='inc-dec--btns'
                onClick={() => handleDecrementRounds()}
              >
                <span className='material-icons'>remove</span>
              </button>
                Rounds: {roundMax}
              <button
                className='inc-dec--btns' 
                onClick={() => handleIncrementRounds()}
              >
                <span className='material-icons'>add</span>
              </button>
            </div> */}
            <button className='try-btn' onClick={() => handleTryAgain()}>Try Again</button>
          </div> 
        </div>
  )
}

export default Gameover;