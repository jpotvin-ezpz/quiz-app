import React from 'react';
import quizImg from '../../resources/undraw_adventure_4hum 1.svg';
import Answers from './Answers';
import NextBtn from './NextBtn';
import Question from './Question';
import Round from './Round';

function QuizWrapper({question, correct, handleAnswerPick, countries, round, roundMax, isAnswered, handleNext, handleSettingsClick}) {
  return (
    <div className="main-wrapper">
          <div className='img-header--wrapper'>
            <h1 className='quiz-title'>Country Quiz</h1>
            <img className='quiz-img' src={quizImg} alt='' />
          </div>
          <div className='quiz-wrapper'>
            <Question question={question} correct={correct} />
            <Answers 
              countries={countries} 
              handleAnswerPick={handleAnswerPick} 
            />
            <div className='round-next--wrapper'>
              <Round 
                handleSettingsClick={handleSettingsClick}
                round={round}
                roundMax={roundMax}
              />
              {isAnswered && <NextBtn handleNext={handleNext} />}
            </div>
          </div>
      </div>
  )
}

export default QuizWrapper;