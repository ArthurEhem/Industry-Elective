// components/FlagQuiz.js
import React, { useState, useEffect } from 'react';

const FlagQuiz = () => {
  const [flags, setFlags] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Fetch 25 random country codes
    const countryCodes = ["CN", "US", "FR", "DE", "BR", "IN", "JP", "RU", "CA", "AU", /* add more codes as needed */];
    const shuffledCodes = countryCodes.sort(() => 0.5 - Math.random()).slice(0, 25);
    
    // Set flags in 5x5 grid format
    setFlags(shuffledCodes.map(code => ({ code, visible: true })));
  }, []);

  const currentFlag = flags[currentQuestion];

  const handleFlagClick = (flag) => {
    // Prevent action if the game is over
    if (currentQuestion >= flags.length) return;
    
    if (flag.code === currentFlag.code) {
      setScore(score + 1);
    }
    
    // Hide the selected flag
    setFlags(flags.map(f => f.code === flag.code ? { ...f, visible: false } : f));
    
    // Move to next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h1>Flag Quiz Game</h1>
      {currentQuestion < flags.length ? (
        <p>Question {currentQuestion + 1} of 10: Select the flag of {currentFlag?.code}</p>
      ) : (
        <h2>Game Over</h2>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {flags.map((flag, index) => (
          flag.visible && (
            <img
              key={index}
              src={`https://flagsapi.com/${flag.code}/flat/64.png`}
              alt={`Flag of ${flag.code}`}
              onClick={() => handleFlagClick(flag)}
              style={{ cursor: 'pointer', border: '1px solid #ddd', borderRadius: '5px' }}
            />
          )
        ))}
      </div>
      {currentQuestion >= flags.length && (
        <div>
          <p>You answered {score} out of {flags.length} correctly!</p>
        </div>
      )}
    </div>
  );
};

export default FlagQuiz;
