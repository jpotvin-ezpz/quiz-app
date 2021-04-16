/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Playing from "./components/Playing/Playing";
import Gameover from "./components/GameOver/Gameover";

const QuizApp = () => {
  const allCountriesURL = "https://restcountries.eu/rest/v2/all?fields=name;capital;flag";
  const [allCountries, setAllCountries] = useState('');
  const [correct, setCorrect] = useState("Loading...");
  const [countries, setCountries] = useState("Loading..");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(false);
  const [round, setRound] = useState(1);
  const [loading, setLoading] = useState(true);
  const [roundMax, setRoundMax] = useState(8);
  const [error, setError] = useState('');
  const [settings, setSettings] = useState(false);
  // TODO: Add 404 Error Render
  
  let uniqNumsArr = [];
  let shuffledArr = [];

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

  function shuffleCountries() {
    setCorrect(allCountries[uniqNumsArr[0]]);
        setCountries({
          1: allCountries[shuffledArr[0]],
          2: allCountries[shuffledArr[1]],
          3: allCountries[shuffledArr[2]],
          4: allCountries[shuffledArr[3]],
        });
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
    shuffleCountries();
  }
  
  function handleTryAgain() {
    setIsAnswered(false);
    setScore(0);
    setRound(1);
    shuffleCountries()
  }

  function handleSettingsClick() {
    return;
    //todo
  }

  // function handleDecrementRounds() {
  //   return;
  //   //todo 
  // }

  // function handleIncrementRounds() {
  //   return;
  //   //todo
  // }

  
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
      {round <= roundMax  ? 
      <Playing
        loading={loading}
        question={question}
        correct={correct}
        countries={countries}
        handleAnswerPick={handleAnswerPick}
        round={round}
        roundMax={roundMax}
        isAnswered={isAnswered}
        handleNext={handleNext}
        handleSettingsClick={handleSettingsClick}
      />
      : <Gameover
          score={score}
          roundMax={roundMax}
          handleTryAgain={handleTryAgain}
        />
      }
    <footer>created by Jacob Potvin - devChallenges.io</footer>
    </div>
  );
};

export default QuizApp;
