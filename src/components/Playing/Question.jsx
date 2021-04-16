import React from 'react';
//TODO add more questions
// TODO will require changing answers

function Question({question, correct}) {
  return (
    question ? (
      <div className='question-wrapper'>
        <img className='flag-img' src={correct.flag} alt="country flag" />
        <h2 className='question'>Which country does this flag belong to?</h2>
      </div>
    ) :  (
      <div className='question-wrapper'>
        <h2 className='question' >{correct.capital} is the capital of...</h2>
      </div>
    )
  )
}

export default Question;