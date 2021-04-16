/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import resultsImg from './resources/undraw_winners_ao2o 2.svg';
import quizImg from './resources/undraw_adventure_4hum 1.svg';

const QuizApp = () => {
  let uniqNumsArr = [];
  let shuffledArr = [];
  const [allCountries, setAllCountries] = useState('');
  const allCountriesURL =
  "https://restcountries.eu/rest/v2/all?fields=name;capital;flag";
  const [correct, setCorrect] = useState("Loading...");
  const [countries, setCountries] = useState("Loading..");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(false);
  const [round, setRound] = useState(1);
  const [roundMax, setRoundMax] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // TODO: Add 404 Error Render


  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function genFourUniqNums() {
    do {
      let newNum = getRandomNumber(0, 249);
      if (uniqNumsArr.includes(newNum)) {
        return;
      } else {
        uniqNumsArr.push(newNum);
      }
    } while (uniqNumsArr.length < 4);
    return uniqNumsArr;
  }

  function shuffle(arr) {
    shuffledArr = [...arr].sort(() => Math.random() - 0.5);
  }

  function handleAnswerPick(e) {
    if (isAnswered) return;
    if (countries[e.target.id] === correct) {
      setScore((prevScore) => prevScore + 1);
    } else {
      e.target.classList.add("wrong");
    }
    showCorrect();
    setIsAnswered(true);
  }
  
  function showCorrect() {
    for (let i = 1; i < 5; i++) {
      if (countries[i] === correct) {
        let listItem = document.getElementById(`${i}`);
        listItem.classList.add("right");
      }
    }
  }
  
  function handleNext() {
    setIsAnswered(false);
    setQuestion(!question);
    setRound(round + 1);
    for (let i = 1; i < 5; i++) {
      let listItem = document.getElementById(`${i}`);
      listItem.classList.remove("right");
      listItem.classList.remove("wrong");
    }
    genFourUniqNums();
    shuffle(uniqNumsArr);
    setCorrect(allCountries[uniqNumsArr[0]]);
        setCountries({
          1: allCountries[shuffledArr[0]],
          2: allCountries[shuffledArr[1]],
          3: allCountries[shuffledArr[2]],
          4: allCountries[shuffledArr[3]],
        });
  }
  
  function handleTryAgain() {
    setIsAnswered(false);
    setScore(0);
    setRound(1);
  }

  
  useEffect(() => {
    fetch(allCountriesURL)
    .then((response) => response.json())
    .then((data) => {
      setCorrect(data[uniqNumsArr[0]]);
      setCountries({
        1: data[shuffledArr[0]],
        2: data[shuffledArr[1]],
        3: data[shuffledArr[2]],
        4: data[shuffledArr[3]],
      });
      setAllCountries([...data])
      setLoading(false);
    });
  }, [])
  
  
  genFourUniqNums();
  shuffle(uniqNumsArr);

  return (
    <div className="quiz-app">
      {round <= roundMax ? 
      <div>
        {loading ? (
          <div className='loading-msg'>Loading...</div>
        ) : (
          <div className="main-wrapper">
          <div className='img-header--wrapper'>
            <h1 className='quiz-title'>Country Quiz</h1>
            <img className='quiz-img' src={quizImg} alt='' />
          </div>
          <div className='quiz-wrapper'>
            {question ? (
              <div className='question-wrapper'>
                <img className='flag-img' src={correct.flag} alt="country flag" />
                <h2 className='question'>Which country does this flag belong to?</h2>
              </div>
            ) : (
              <div className='question-wrapper'>
                <h2 className='question' >{correct.capital} is the capital of...</h2>
              </div>
            )}

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
            <div className='round-next--wrapper'>
            <div className='round'>Round: {round}/{roundMax}</div>
            {isAnswered && <button className='next-btn' onClick={() => handleNext()}>Next</button>}
            </div>
          </div>
          </div>
        )}
      </div>
      : <div>
          <h1 className='quiz-title'>Country Quiz</h1>
          <div className='quiz-wrapper result-page'>
            <img className='results-img' src={resultsImg} alt=''/>
            <h2 className='results'>Results</h2>
            <p className='score-sum'>You got <span>{score}/{roundMax}</span> answers correct</p>
            <button className='try-btn' onClick={() => handleTryAgain()}>Try Again</button>
          </div> 
        </div>
      }
    <footer>created by Jacob Potvin - devChallenges.io</footer>
    </div>
  );
};

export default QuizApp;
