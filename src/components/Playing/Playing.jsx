import React from 'react';

import Loading from './Loading';
import QuizWrapper from './QuizWrapper';


function Playing({loading, question, correct, countries, handleAnswerPick, round, roundMax, isAnswered, handleNext, handleSettingsClick}) {
  return (
    <div className='playing'>
        {loading ? <Loading />
          : <QuizWrapper
              loading={loading}
              question={question}
              correct={correct}
              countries={countries}
              handleAnswerPick={handleAnswerPick}
              handleSettingsClick={handleSettingsClick}
              round={round}
              roundMax={roundMax}
              isAnswered={isAnswered}
              handleNext={handleNext}
          />}
      </div>
  )
}

export default Playing