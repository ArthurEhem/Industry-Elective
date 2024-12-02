import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti"; // Import confetti
import clapBocchiGif from "../assets/clap-bocchi.gif";

function secondsToHMS(seconds) {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state.data;

  // Trigger confetti when the result page is loaded
  useEffect(() => {
    // Trigger the confetti effect once the page is loaded
    confetti({
      particleCount: 150, // Number of particles
      angle: 90, // Direction (90 degrees to shoot horizontally)
      spread: 45, // Spread of particles
      origin: { x: 0.5, y: 0.5 }, // Start position (center of the page)
    });
  }, []);

  function handleRetryClick() {
    navigate("/game", {
      replace: true,
      state: { continent: data.continent, difficulty: data.difficulty },
    });
  }

  function handleQuitClick() {
    navigate("/", { replace: true });
  }

  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
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
        <div className="mt-16 flex space-x-4">
          <button
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-lg font-semibold text-white shadow-md hover:from-blue-700 hover:to-blue-600 active:scale-95 transform transition-all duration-150"
            onClick={handleRetryClick}
          >
            Retry
          </button>
          <button
            className="w-full rounded-lg bg-gradient-to-r from-red-600 to-red-500 py-3 text-lg font-semibold text-white shadow-md hover:from-red-700 hover:to-red-600 active:scale-95 transform transition-all duration-150"
            onClick={handleQuitClick}
          >
            Quit
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
