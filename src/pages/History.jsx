import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import MusicPlayer from "../components/MusicPlayer";  


function History() {
  const location = useLocation();
  const navigate = useNavigate();
  const clickedFlags = location.state.history; // Access clicked flags from navigation state
  const data = location.state;

  useEffect(() => { console.log(location.state) }, [location.state]);

  function handleResultClick() {
    navigate("/game/results", {
      replace: true,
      state: {
        data: {
          accuracy: data.accuracy,
          score: data.score,
          total: data.total,
          continent: data.continent,
          difficulty: data.difficulty,
          history: data.history,
        },
      },
    });
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6 pt-20"> {/* Add pt-20 to create space for navbar */}
      <NavigationBar />
      <MusicPlayer src="/Loop03.mp3" volume={0.5} />
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700 pt-10">Clicked Flags History</h1>
      
      {/* Results Button - Positioned with padding-top to make sure it's not covered */}
      <button
        className="pt-10 w-120 md:w-auto rounded-lg bg-gradient-to-r from-green-600 to-green-500 py-3 text-lg font-semibold text-white shadow-md hover:from-red-700 hover:to-red-600 active:scale-95 transform transition-all duration-150 animate-pulse-custom absolute top-16 left-6" 
        onClick={handleResultClick} 
      >
        Results
      </button>

      {clickedFlags.length > 0 ? (
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden mt-5">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">Flag</th>
              <th className="p-4 text-left">Country</th>
              <th className="p-4 text-left">Asked Country</th>
              <th className="p-4 text-left">Correct</th>
            </tr>
          </thead>
          <tbody>
            {clickedFlags.map((entry, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={`/flags/${entry.code}.png`}
                    alt={`${entry.country} flag`}
                    className="h-12 w-20 rounded-md transition-transform duration-200 hover:scale-110"
                  />
                </td>
                <td className="p-4">{entry.country}</td>
                <td className="p-4">{entry.asked}</td>
                <td className="p-4">
                  {entry.correct ? (
                    "✅"
                  ) : (
                    <img
                      src={`/flags/${entry.askedcode}.png`}
                      alt={`${entry.asked} flag`}
                      className="h-12 w-20 rounded-md transition-transform duration-200 hover:scale-110"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-600">No flags clicked yet!</p>
      )}
    </div>
  );
}

export default History;
