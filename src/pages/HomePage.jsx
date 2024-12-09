import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import MusicPlayer from "../components/MusicPlayer";
import NavigationBar from "../components/NavigationBar";
import hoverSound from '/Hover.mp3';
import clickSound from '/Click.mp3';

function HomePage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef(new Audio(hoverSound));
  const clickAudioRef = useRef(new Audio(clickSound));

  const playHoverSound = () => { 
    audioRef.current.currentTime = 0; 
    audioRef.current.play(); 
  };

  const playClickSound = () => { 
    clickAudioRef.current.currentTime = 0; 
    clickAudioRef.current.play(); 
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModalOnClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowModal(false);
    }
  };

  return (
    <div className="relative flex h-screen flex-col items-center bg-gradient-to-br from-blue-100 to-blue-300">
      <NavigationBar />
      <MusicPlayer src="/Loop03.mp3" volume={0.5} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/Flags01.gif)',
          backgroundSize: '100%',
          backgroundPosition: 'top',
          opacity: 0.1,
          zIndex: 0, // Ensure the background is behind all other content
        }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <img src="/Title.png" alt="Title" className="mb-8 animate-pulse-custom" />
        <button
          type="button"
          className="w-full max-w-md rounded-3xl bg-gradient-to-r from-blue-600 to-pink-500 py-3 text-5xl font-bold text-white shadow-lg hover:from-blue-700 hover:to-pink-400 active:scale-95 transform transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-pulse-custom"
          style={{
            fontFamily: "'Baloo', sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
          onClick={() => { toggleModal(); playClickSound(); }}
          onMouseEnter={playHoverSound}
        >
          PLAY
        </button>
      </div>
      {showModal && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          onClick={closeModalOnClickOutside}
        >
          <div className="relative bg-gradient-to-br from-blue-300 to-pink-300 p-8 rounded-lg shadow-xl w-96 max-w-md transform transition-all duration-300 ease-in-out scale-110">
            <button
              className="absolute top-0.5 right-2 text-gray-800 text-xl font-bold hover:text-red-500"
              onClick={() => { toggleModal(); playClickSound(); }}
              onMouseEnter={playHoverSound}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">Choose an Option</h2>
            <div className="space-y-4">
              <button
                className="w-full rounded-lg bg-white py-2 text-lg font-semibold text-purple-600 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={() => { navigate("/options"); playClickSound(); }}
                onMouseEnter={playHoverSound}
              >
                World Flag Challenge
              </button>
              <button
                className="w-full rounded-lg bg-white py-2 text-lg font-semibold text-purple-600 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={() => { navigate("/ContinentGuessGame"); playClickSound();}}
                onMouseEnter={playHoverSound}
              >
                Continent Quiz Game
              </button>
              <button
                className="w-full rounded-lg bg-white py-2 text-lg font-semibold text-purple-600 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={() => { navigate("/library"); playClickSound();}}
                onMouseEnter={playHoverSound}
              >
                More About the Flags
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
