import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate hook
import { continents } from "../data/continentsquiz";
import confetti from "canvas-confetti";
import NavigationBar from "../components/NavigationBar";
import MusicPlayer from "../components/MusicPlayer"; 

const CountryQuizGame = () => {
  const navigate = useNavigate();  // Hook to navigate
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

  useEffect(() => {
    if (gameOver) {
      confetti(); // Trigger the confetti effect
    }
  }, [gameOver]);

  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <NavigationBar />
      <MusicPlayer src="/Loop01.mp3" volume={0.5} />
      <h1 className="text-5xl font-bold mb-10 text-center">Country Quiz</h1>
      {gameOver ? (
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-6">Game Over!</h2>
          <p className="text-2xl mb-6">Your score: {score} / 10</p>
          <button
            onClick={resetGame}
            className="mt-6 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-xl transition ease-in-out duration-200 transform hover:scale-105"
          >
            Play Again
          </button>
          <button
            onClick={() => navigate("/", { replace: true })} // Redirect to home page
            className="mt-10 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-xl transition ease-in-out duration-200 transform hover:scale-105"
          >
            Quit
          </button>
        </div>
      ) : currentCountry ? (
        <div className="bg-white text-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-2xl">
          <p className="text-xl font-medium text-center mb-6">
            Question {questionCount + 1} of 10 ({currentQuestionType})
          </p>
          <p className="text-3xl font-bold text-center mb-8">
            {questionTypes.find(q => q.type === currentQuestionType).generateQuestion(currentCountry).question}
          </p>
          <div className="grid grid-cols-2 gap-6">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition ease-in-out duration-200 transform hover:scale-105"
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
