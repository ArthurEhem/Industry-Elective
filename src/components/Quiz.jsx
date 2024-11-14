import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

  const timeRef = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const continent = location.state.continent;
  const difficulty = location.state.difficulty;

  useEffect(() => {
    setCountries(shuffle(continent.countries));
  }, [continent.countries]);
// Changes into next country
  useEffect(() => {
    if (countries.length > 0) {
      const nextCountry = countries[Math.floor(Math.random() * countries.length)];
      setCurrentCountry(nextCountry);
      generateFlagOptions(nextCountry);
    }
  }, [countries]);

  function generateFlagOptions(correctCountry) {
    // Get three random incorrect options
    const incorrectOptions = countries
      .filter((country) => country.name !== correctCountry.name)
      .sort(() => 0.5 - Math.random())
      .slice(0, difficulty === "normal" ? 3 : 15);
      
    // Add the correct option and shuffle them
    const options = shuffle([correctCountry, ...incorrectOptions]);
    setFlagOptions(options);
  }
 
  function handleClick(country) {
    setTotalClicks(totalClicks + 1);
    // Remove the selected country from the list
    setCountries(countries.filter((c) => c.name !== currentCountry.name));

    if (country.name === currentCountry.name) {
      setCorrectClicks(correctClicks + 1);
    }

    if (countries.length <= 1) {
      navigate("/game/results", {
        state: {
          data: {
            accuracy: ((correctClicks / totalClicks) * 100).toFixed(2),
            score: correctClicks,
            continent: continent,
          },
        },
      });
    } else {
      // Set the next country and options
      const nextCountry = countries[Math.floor(Math.random() * countries.length)];
      setCurrentCountry(nextCountry);
      generateFlagOptions(nextCountry);
    }
  }

  const accuracy =
    totalClicks > 0 ? ((correctClicks / totalClicks) * 100).toFixed(2) : 0;

  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-gray-50">
      <div className="absolute right-10 top-10 flex gap-x-6">
        <button
          onClick={() => setCountries(shuffle(countries))}
          className="w-24 rounded-md p-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 transition hover:bg-gray-100 hover:ring-gray-400 active:bg-gray-200 active:ring-gray-500"
        >
          Shuffle
        </button>
        <button
          onClick={() => navigate(0)}
          className="w-24 rounded-md p-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 transition hover:bg-gray-100 hover:ring-gray-400 active:bg-gray-200 active:ring-gray-500"
        >
          Retry
        </button>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="w-24 rounded-md p-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 transition hover:bg-gray-100 hover:ring-gray-400 active:bg-gray-200 active:ring-gray-500"
        >
          Quit
        </button>
      </div>
      <div>
        <h1 className="text-center text-[40px] font-bold text-blue-600">
          {currentCountry && currentCountry.name}
        </h1>
        <p className="text-center text-2xl font-semibold">
          <span className="text-blue-600">{accuracy}%</span> Accuracy
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 p-6">
        {flagOptions.map((country, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center rounded-md p-1 transition hover:ring-2 hover:ring-blue-600"
            onClick={() => handleClick(country)}
          >
            <div className="absolute h-full w-full opacity-50 hover:bg-blue-600"></div>
            <img
              src={`/flags/${country.code}.png`}
              className="h-[112px] w-[168px] rounded-md ring-1 ring-gray-300"
              alt={`${country.name} flag`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
