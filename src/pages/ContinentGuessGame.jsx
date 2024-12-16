import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate hook
import { continents } from "../data/continentsquiz";
import confetti from "canvas-confetti";
import NavigationBar from "../components/NavigationBar";
import MusicPlayer from "../components/MusicPlayer"; 

const CountryQuizGame = () => {
  const navigate = useNavigate(); // Hook to navigate
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [currentQuestionType, setCurrentQuestionType] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [quizHistory, setQuizHistory] = useState([]); // New state to track quiz history

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

  useEffect(() => {
    const countriesList = continents.flatMap(continent => 
      continent.countriesList.map(country => ({
        ...country,
        continent: continent.continentName
      }))
    );
    setAllCountries(countriesList);
  }, []);

  useEffect(() => {
    if (allCountries.length > 0 && questionCount < 10) {
      generateNextQuestion();
    } else if (questionCount === 10) {
      setGameOver(true);
    }
  }, [allCountries, questionCount]);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const generateNextQuestion = () => {
    const randomQuestionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    setCurrentQuestionType(randomQuestionType.type);

    const nextCountry = allCountries[Math.floor(Math.random() * allCountries.length)];
    setCurrentCountry(nextCountry);

    const { question, correctAnswer, generateOptions } = randomQuestionType.generateQuestion(nextCountry);

    const allPossibleOptions = generateOptions();
    const uniqueOptions = [...new Set(allPossibleOptions)];

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

  const handleAnswer = (selectedOption) => {
    const currentQuestionTypeObj = questionTypes.find(q => q.type === currentQuestionType);

    setQuizHistory(prevHistory => [
      ...prevHistory,
      {
        question: currentQuestionTypeObj.generateQuestion(currentCountry).question,
        correctAnswer,
        selectedAnswer: selectedOption
      }
    ]);

    if (currentQuestionTypeObj.validateAnswer(selectedOption, correctAnswer)) {
      setScore(score + 1);
    }

    setQuestionCount(questionCount + 1);
  };

  const resetGame = () => {
    setQuestionCount(0);
    setScore(0);
    setGameOver(false);
    setQuizHistory([]);
    generateNextQuestion();
  };

  useEffect(() => {
    if (gameOver) {
      confetti();
    }
  }, [gameOver]);

  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-white p-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/Flags01.gif)",
          backgroundSize: "100%",
          backgroundPosition: "bottom",
          opacity: 0.1,
          zIndex: 0,
        }}
      ></div>
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          zIndex: 1,
        }}
      ></div>
      <NavigationBar style={{ zIndex: 2 }} />
      <MusicPlayer src="/Loop01.mp3" volume={0.5} style={{ zIndex: 2 }} />
      <h1 className="text-6xl font-extrabold mb-12 text-center" style={{ zIndex: 3 }}>
        Country Quiz
      </h1>
      {gameOver ? (
        <div className="text-center w-full max-w-4xl" style={{ zIndex: 3 }}>
          <h2 className="text-5xl font-bold mb-4">Game Over!</h2>
          <p className="text-3xl mb-8">Your score: {score} / 10</p>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mb-6">
            <button
              onClick={resetGame}
              className="px-10 py-5 bg-green-500 hover:bg-green-600 text-white text-xl rounded-full shadow-lg transform hover:scale-110 transition ease-in-out duration-200"
              style={{ zIndex: 3 }}
            >
              Play Again
            </button>
            <button
              onClick={() => navigate("/", { replace: true })}
              className="px-10 py-5 bg-red-500 hover:bg-red-600 text-white text-xl rounded-full shadow-lg transform hover:scale-110 transition ease-in-out duration-200"
              style={{ zIndex: 3 }}
            >
              Quit
            </button>
          </div>

          {/* Answer Sheet */}
          <div className="bg-white text-gray-800 p-6 rounded-3xl shadow-xl w-full max-w-4xl overflow-y-auto max-h-[400px]" style={{ zIndex: 3 }}>
            <h3 className="text-3xl font-bold mb-4 text-center">Review</h3>
            <ul className="text-lg space-y-6">
              {quizHistory.map((entry, index) => (
                <li key={index} className="p-4 border rounded-lg shadow-sm bg-gray-100">
                  <p className="text-xl font-semibold mb-2">
                    <strong>Question {index + 1}:</strong> {entry.question}
                  </p>
                  <p className="text-lg">
                    <strong>Correct Answer:</strong> {entry.correctAnswer}
                  </p>
                  <p className={`text-lg ${entry.correctAnswer === entry.selectedAnswer ? "text-green-600" : "text-red-600"}`}>
                    <strong>Your Answer:</strong> {entry.selectedAnswer}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : currentCountry ? (
        <div className="bg-white text-gray-800 p-12 rounded-3xl shadow-xl w-full max-w-3xl" style={{ zIndex: 3 }}>
          <p className="text-2xl font-semibold text-center mb-8">
            Question {questionCount + 1} of 10 ({currentQuestionType})
          </p>
          <p className="text-4xl font-bold text-center mb-10">
            {questionTypes.find(q => q.type === currentQuestionType).generateQuestion(currentCountry).question}
          </p>
          <div className="grid grid-cols-2 gap-8">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition ease-in-out duration-200"
                style={{ zIndex: 3 }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-2xl font-bold text-center">Loading...</p>
      )}
    </div>
  );
};

export default CountryQuizGame;
