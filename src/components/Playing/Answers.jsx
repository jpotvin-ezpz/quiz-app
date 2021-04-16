import React from 'react';

function Answers({handleAnswerPick, countries}) {
  return (
    <ol className='answer-list'>
              <li
                id="1"
                className="answer"
                onClick={(e) => handleAnswerPick(e)}
              >
                <span>
                  {countries[1].name}
                </span>
                <span className="material-icons nope">
                  cancel
                </span>
                <span className="material-icons correct">
                  check_circle
                </span>
             </li>
              <li
                id="2"
                className="answer"
                onClick={(e) => handleAnswerPick(e)}
              >
                <span>
                  {countries[2].name}
                </span>
                <span className="material-icons nope">
                  cancel
                </span>
                <span className="material-icons correct">
                  check_circle
                </span>
              </li>
              <li
                id="3"
                className="answer"
                onClick={(e) => handleAnswerPick(e)}
              >
                <span>
                  {countries[3].name}
                </span>
                <span className="material-icons nope">
                  cancel
                </span>
                <span className="material-icons correct">
                  check_circle
                </span>
              </li>
              <li
                id="4"
                className="answer"
                onClick={(e) => handleAnswerPick(e)}
              >
                <span>
                  {countries[4].name}
                </span>
                <span className="material-icons nope">
                  cancel
                </span>
                <span className="material-icons correct">
                  check_circle
                </span>
              </li>
            </ol>
  )
}

export default Answers;