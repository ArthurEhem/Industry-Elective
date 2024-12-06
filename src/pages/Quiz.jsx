import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import rightSound from '/Right.mp3'; 
import wrongSound from '/Wrong.mp3';
import NavigationBar from "../components/NavigationBar";
import momoiGif from "../assets/momoiR.gif"; // Import the GIF

function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function Quiz() {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [flagOptions, setFlagOptions] = useState([]);
  const [correctClicks, setCorrectClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [showWrong, setShowWrong] = useState(false);
  const [showGif, setShowGif] = useState(false); // State for controlling the GIF visibility

  const rightAudioRef = useRef(new Audio(rightSound));
  const wrongAudioRef = useRef(new Audio(wrongSound));

  const location = useLocation();
  const navigate = useNavigate();
  const continent = location.state.continent;
  const difficulty = location.state.difficulty;

  useEffect(() => {
    setCountries(shuffle(continent.countries));
  }, [continent.countries]);

  useEffect(() => {
    if (countries.length > 0) {
      const nextCountry = countries[Math.floor(Math.random() * countries.length)];
      setCurrentCountry(nextCountry);
      generateFlagOptions(nextCountry);
    }
  }, [countries]);

  function generateFlagOptions(correctCountry) {
    const incorrectOptions = countries
      .filter((country) => country.name !== correctCountry.name)
      .sort(() => 0.5 - Math.random())
      .slice(0, difficulty === "normal" ? 3 : 15);

    const options = shuffle([correctCountry, ...incorrectOptions]);
    setFlagOptions(options);
  }

  function playAudio(audioRef) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  function handleClick(country) {
    setTotalClicks(totalClicks + 1);

    if (country.name === currentCountry.name) {
      setCorrectClicks(correctClicks + 1);
      playAudio(rightAudioRef);
    } else {
      playAudio(wrongAudioRef);
      setShowWrong(true);
      setShowGif(true); // Show the GIF when the answer is wrong
      setTimeout(() => {
        setShowWrong(false);
        setShowGif(false); // Hide the GIF after 1 second
      }, 500);
    }

    if (countries.length <= 1) {
      navigate("/game/results", {
        state: {
          data: {
            accuracy: ((correctClicks / totalClicks) * 100).toFixed(2),
            score: correctClicks,
            total: totalClicks,
            continent: continent,
            difficulty: difficulty,
          },
        },
      });
    } else {
      setCountries(countries.filter((c) => c.name !== currentCountry.name));
      const nextCountry = countries[Math.floor(Math.random() * countries.length)];
      setCurrentCountry(nextCountry);
      generateFlagOptions(nextCountry);
    }
  }

  const accuracy = totalClicks > 0 ? ((correctClicks / totalClicks) * 100).toFixed(2) : 0;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <NavigationBar />

      {/* Place the 'Incorrect' message lower */}
      {showWrong && (
        <div className="absolute top-32 text-3xl font-bold text-red-600 animate-pulse">
          Incorrect
        </div>
      )}

      {/* Show the GIF when wrong */}
      {showGif && (
        <img
          src={momoiGif}
          alt="Momoi Reaction"
          className="absolute top-48 mx-auto h-24 w-24"
        />
      )}

      {/* Country and Accuracy Display */}
      <div className="text-center mt-12">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">{currentCountry && currentCountry.name}</h1>
        <p className="text-xl font-semibold text-gray-600">
          Accuracy: <span className="text-blue-600">{accuracy}%</span>
        </p>
        <div className="w-64 h-2 mt-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${accuracy}%` }}
          ></div>
        </div>
      </div>

      {/* Flag Options */}
      <div className="grid grid-cols-4 gap-6 mt-12">
        {flagOptions.map((country, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center p-2 rounded-md bg-white shadow-md hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleClick(country)}
          >
            <div className="absolute inset-0 opacity-0 hover:bg-blue-600 hover:opacity-20 rounded-md transition-opacity"></div>
            <img
              src={`/flags/${country.code}.png`}
              className="h-28 w-40 rounded-md object-cover ring-1 ring-gray-300"
              alt={`${country.name} flag`}
            />
          </div>
        ))}
      </div>

      {/* Retry and Quit buttons */}
      <div className="mt-8 flex gap-8">
        <button
          onClick={() => navigate(0)}
          className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 active:scale-95 transition-transform duration-150"
        >
          Retry
        </button>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="rounded-lg bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-red-700 active:scale-95 transition-transform duration-150"
        >
          Quit
        </button>
      </div>

      {/* Shuffle Button */}
      <div className="mt-12">
        <button
          onClick={() => setCountries(shuffle(countries))}
          className="rounded-lg bg-gray-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-gray-700 active:scale-95 transition-transform duration-150"
        >
          Shuffle
        </button>
      </div>
    </div>
  );
}

export default Quiz;
