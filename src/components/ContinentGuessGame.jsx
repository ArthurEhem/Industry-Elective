import React, { useState, useEffect } from "react";
import { continents } from "../data/continentsquiz";

const CountryQuizGame = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [currentQuestionType, setCurrentQuestionType] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Question types with their respective generation and validation logic
  const questionTypes = [
    {
      type: "continent",
      generateQuestion: (country) => ({
        question: `Which continent does ${country.countryName} belong to?`,
        correctAnswer: country.continent,
        generateOptions: () => continents.map(continent => continent.continentName)
      }),
      validateAnswer: (selectedOption, correctAnswer) => selectedOption === correctAnswer
    },
    {
      type: "capital",
      generateQuestion: (country) => ({
        question: `What is the capital of ${country.countryName}?`,
        correctAnswer: country.capitalCity,
        generateOptions: () => allCountries.map(c => c.capitalCity)
      }),
      validateAnswer: (selectedOption, correctAnswer) => selectedOption === correctAnswer
    },
    {
      type: "language",
      generateQuestion: (country) => ({
        question: `What is the official language of ${country.countryName}?`,
        correctAnswer: country.officialLanguagesList[0],
        generateOptions: () => [...new Set(allCountries.flatMap(c => c.officialLanguagesList))]
      }),
      validateAnswer: (selectedOption, correctAnswer) => selectedOption === correctAnswer
    },
    {
      type: "currency",
      generateQuestion: (country) => ({
        question: `Which currency is used in ${country.countryName}?`,
        correctAnswer: country.currencyName,
        generateOptions: () => [...new Set(allCountries.map(c => c.currencyName))]
      }),
      validateAnswer: (selectedOption, correctAnswer) => selectedOption === correctAnswer
    }
  ];

  // Prepare countries on initial load
  useEffect(() => {
    const countriesList = continents.flatMap(continent => 
      continent.countriesList.map(country => ({
        ...country,
        continent: continent.continentName
      }))
    );
    setAllCountries(countriesList);
  }, []);

  // Generate next question when countries are loaded or question count changes
  useEffect(() => {
    if (allCountries.length > 0 && questionCount < 10) {
      generateNextQuestion();
    } else if (questionCount === 10) {
      setGameOver(true);
    }
  }, [allCountries, questionCount]);

  // Shuffle array utility
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Generate next question
  const generateNextQuestion = () => {
    // Randomly select a question type
    const randomQuestionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    setCurrentQuestionType(randomQuestionType.type);

    // Select a random country
    const nextCountry = allCountries[Math.floor(Math.random() * allCountries.length)];
    setCurrentCountry(nextCountry);

    // Generate question and options
    const { question, correctAnswer, generateOptions } = randomQuestionType.generateQuestion(nextCountry);
    
    // Generate unique options, ensuring correct answer is included
    const allPossibleOptions = generateOptions();
    const uniqueOptions = [...new Set(allPossibleOptions)];
    
    // Create options array with correct answer and random other options
    const optionsSet = new Set([correctAnswer]);
    while (optionsSet.size < 4 && uniqueOptions.length > 0) {
      const randomOption = uniqueOptions[Math.floor(Math.random() * uniqueOptions.length)];
      optionsSet.add(randomOption);
      uniqueOptions.splice(uniqueOptions.indexOf(randomOption), 1);
    }

    const shuffledOptions = shuffleArray(Array.from(optionsSet));
    
    setOptions(shuffledOptions);
    setCorrectAnswer(correctAnswer);
  };

  // Handle user's answer
  const handleAnswer = (selectedOption) => {
    const currentQuestionTypeObj = questionTypes.find(q => q.type === currentQuestionType);
    
    if (currentQuestionTypeObj.validateAnswer(selectedOption, correctAnswer)) {
      setScore(score + 1);
    }
    
    setQuestionCount(questionCount + 1);
  };

  // Reset game
  const resetGame = () => {
    setQuestionCount(0);
    setScore(0);
    setGameOver(false);
    generateNextQuestion();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Country Quiz</h1>
      {gameOver ? (
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Game Over!</h2>
          <p className="text-xl">Your score: {score} / 10</p>
          <button
            onClick={resetGame}
            className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg transition"
          >
            Play Again
          </button>
        </div>
      ) : currentCountry ? (
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-96">
          <p className="text-lg font-medium text-center mb-4">
            Question {questionCount + 1} of 10 ({currentQuestionType})
          </p>
          <p className="text-2xl font-bold text-center mb-6">
            {questionTypes.find(q => q.type === currentQuestionType).generateQuestion(currentCountry).question}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {options.map((option) => (
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

export default CountryQuizGame;