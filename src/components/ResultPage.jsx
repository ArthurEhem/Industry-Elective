import { Link, useLocation, useNavigate } from "react-router-dom";

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

  function handleClick() {
    navigate("/game", {
      replace: true,
      state: { continent: data.continent },
    });
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
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
              <p className="text-sm font-medium text-gray-600">Time Finished</p>
              <h2 className="text-2xl font-semibold text-blue-600 mt-1">
                {secondsToHMS(data.time)}
              </h2>
            </div>
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
              {data.score}
            </h2>
          </div>
        </div>
        <div className="mt-16">
          <button
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-lg font-semibold text-white shadow-md hover:from-blue-700 hover:to-blue-600 active:scale-95 transform transition-all duration-150"
            onClick={handleClick}
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
