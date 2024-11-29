import React, { useState, useEffect } from "react";
import { continents } from "../data/continents";

const ContinentGuessGame = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [continentOptions, setContinentOptions] = useState([]);
  const [correctContinent, setCorrectContinent] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const countries = continents.flatMap((continent) =>
      continent.countries.map((country) => ({
        ...country,
        continent: continent.name,
      }))
    );
    setAllCountries(countries);
  }, []);

  useEffect(() => {
    if (allCountries.length > 0 && questionCount < 10) {
      generateNextQuestion();
    } else if (questionCount === 10) {
      setGameOver(true);
    }
  }, [allCountries, questionCount]);

  const generateNextQuestion = () => {
    const nextCountry =
      allCountries[Math.floor(Math.random() * allCountries.length)];
    setCurrentCountry(nextCountry);
    setCorrectContinent(nextCountry.continent);

    const shuffledContinents = shuffleArray(
      continents.map((continent) => continent.name)
    );
    setContinentOptions(shuffledContinents);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleAnswer = (option) => {
    if (option === correctContinent) {
      setScore(score + 1);
    }
    setQuestionCount(questionCount + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Guess the Continent</h1>
      {gameOver ? (
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Game Over!</h2>
          <p className="text-xl">Your score: {score} / 10</p>
          <button
            onClick={() => {
              setQuestionCount(0);
              setScore(0);
              setGameOver(false);
              generateNextQuestion();
            }}
            className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition"
          >
            Play Again
          </button>
        </div>
      ) : currentCountry ? (
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-96">
          <p className="text-lg font-medium text-center mb-4">
            Question {questionCount + 1} of 10
          </p>
          <p className="text-2xl font-bold text-center mb-6">
            Which continent does{" "}
            <span className="text-blue-600">{currentCountry.name}</span> belong
            to?
          </p>
          <div className="grid grid-cols-2 gap-4">
            {continentOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContinentGuessGame;