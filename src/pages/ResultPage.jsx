import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti"; // Import confetti
import clapBocchiGif from "../assets/clap-bocchi.gif";
import MusicPlayer from "../components/MusicPlayer";
import hoverSound from "/Hover.mp3";
import clickSound from "/Click.mp3";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;
  const audioRef = useRef(new Audio(hoverSound));
  const clickAudioRef = useRef(new Audio(clickSound));

  useEffect(() => { console.log(data.history); }, [data.history]);

  // Trigger confetti when the result page is loaded
  useEffect(() => {
    const confettiInterval = setInterval(() => {
      confetti({
        particleCount: Math.floor(Math.random() * 50) + 50, // Random number of particles between 50 and 100
        angle: Math.random() * 360, // Random direction
        spread: 100, // Spread of particles
        startVelocity: 30,
        origin: {
          x: Math.random(), // Random x position
          y: Math.random(), // Random y position
        },
      });
    }, 1000); // Adjust the interval time as needed

    // Clear interval on component unmount
    return () => clearInterval(confettiInterval);
  }, []);

  const playHoverSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const playClickSound = () => {
    clickAudioRef.current.currentTime = 0;
    clickAudioRef.current.play();
  };

  function handleRetryClick() {
    playClickSound();
    navigate("/game", {
      replace: true,
      state: { continent: data.continent, difficulty: data.difficulty },
    });
  }

  function handleViewHistoryClick() {
    playClickSound();
    navigate("/history", {
      replace: true,
      state: {
        accuracy: data.accuracy,
        score: data.score,
        total: data.total,
        continent: data.continent,
        difficulty: data.difficulty,
        history: data.history,
      },
    });
  }

  function handleQuitClick() {
    playClickSound();
    navigate("/", { replace: true });
  }

  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <MusicPlayer src="/Loop02.mp3" volume={0.5} /> {/* Add MusicPlayer here */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/Flags01.gif)",
          backgroundSize: "100%",
          backgroundPosition: "bottom",
          opacity: 0.2,
          zIndex: 0, // Ensure the background is behind all other content
        }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="rounded-xl bg-white p-12 shadow-2xl transition-transform transform hover:scale-105 duration-200">
        <h1 className="text-3xl font-extrabold text-gray-700 mb-4">Summary</h1>
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-gray-600">Continent</p>
            <h2 className="text-2xl font-semibold text-blue-600 mt-1">
              {data.continent.name}
            </h2>
          </div>
          <div className="flex justify-between space-x-6">
            <div className="w-full">
              <p className="text-sm font-medium text-gray-600">Accuracy</p>
              <h2 className="text-2xl font-semibold text-blue-600 mt-1">
                {data.accuracy}%
              </h2>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Score</p>
            <h2 className="text-2xl font-semibold text-blue-600 mt-1">
              {data.score} out of {data.total}
            </h2>
          </div>
        </div>
        {/* Container for buttons */}
        <div className="mt-16 flex space-x-4">
          <button
            className="w-20 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-lg font-semibold text-white shadow-md hover:from-blue-700 hover:to-blue-600 active:scale-95 transform transition-all duration-150"
            onMouseEnter={playHoverSound}
            onClick={handleRetryClick}
          >
            Retry
          </button>
          <button
            className="w-20 rounded-lg bg-gradient-to-r from-red-600 to-red-500 py-3 text-lg font-semibold text-white shadow-md hover:from-red-700 hover:to-red-600 active:scale-95 transform transition-all duration-150"
            onMouseEnter={playHoverSound}
            onClick={handleQuitClick}
          >
            Quit
          </button>
          <button
            className="w-20 rounded-lg bg-gradient-to-r from-green-600 to-green-500 py-3 text-lg font-semibold text-white shadow-md hover:from-green-700 hover:to-green-600 active:scale-95 transform transition-all duration-150"
            onMouseEnter={playHoverSound}
            onClick={handleViewHistoryClick}
          >
            Review
          </button>
        </div>
      </div>

      {/* GIF at the bottom-right corner */}
      <img
        src={clapBocchiGif}
        alt="Clapping Bocchi"
        className="absolute bottom-4 right-4 w-24 h-auto"
      />
    </div>
  );
}

export default ResultPage;
