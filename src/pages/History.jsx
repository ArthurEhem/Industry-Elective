import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function History() {
  const location = useLocation();
  const navigate = useNavigate();
  const clickedFlags = location.state.history;; // Access clicked flags from navigation state
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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Clicked Flags History</h1>
      <button
           className="w-full rounded-lg bg-gradient-to-r from-green-600 to-green-500 py-3 text-lg font-semibold text-white shadow-md hover:from-red-700 hover:to-red-600 active:scale-95 transform transition-all duration-150"
           onClick={handleResultClick}
         >
           Results
         </button>
      {clickedFlags.length > 0 ? (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">Flag</th>
              <th className="p-4 text-left">Country</th>
              <th className="p-4 text-left">Correct</th>
              <th className="p-4 text-left">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {clickedFlags.map((entry, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={`/flags/${entry.code}.png`}
                    alt={`${entry.country} flag`}
                    className="h-10 w-16 rounded-md"
                  />
                </td>
                <td className="p-4">{entry.country}</td>
                <td className="p-4">{entry.correct ? "✅" : "❌"}</td>
                <td className="p-4">{new Date(entry.timestamp).toLocaleString()}</td>
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
