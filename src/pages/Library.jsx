import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { continents } from "../data/continents";
import NavigationBar from "../components/NavigationBar";
import MusicPlayer from "../components/MusicPlayer";
import hoverSound from '/Hover.mp3';
import clickSound from '/Click.mp3';

function Library() {
  const navigate = useNavigate(); // Initialize the navigate function
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

  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen overflow-hidden">
      <NavigationBar /> {/* Include the Navigation Bar */}
      <MusicPlayer src="/Loop03.mp3" volume={0.5} /> {/* Add MusicPlayer here */}
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
      {/* Adjusted Back Button */}
      <button
        onClick={() => navigate("/", { replace: true })}
        className="absolute top-20 right-10 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg shadow-lg"
      >
        Back
      </button>

      {/* Flag Library Container */}
      <div className="relative bg-gradient-to-br from-blue-300 to-pink-300 p-8 rounded-lg shadow-xl w-full max-w-7xl mt-20 overflow-y-auto h-[calc(100vh-5rem)]">
        <h1 className="text-3xl font-extrabold text-gray-700 mb-8">Flag Library</h1>
        <div className="space-y-6">
          {continents.map((continent) => (
            <div key={continent.name}>
              <h2 className="text-2xl font-semibold text-gray-800">{continent.name}</h2>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {continent.countries.map((country) => (
                  <a 
                    key={country.code} 
                    href={`https://en.wikipedia.org/wiki/${country.name.replace(" ", "_")}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center transform transition-transform duration-300 hover:scale-125"
                    onClick={playClickSound}
                    onMouseEnter={playHoverSound}
                  >
                    <img
                      src={`/flags/${country.code}.png`}
                      alt={`${country.name} flag`}
                      className="w-20 h-12 object-cover mb-2"
                    />
                    <span className="text-sm text-gray-700">{country.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
