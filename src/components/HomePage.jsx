import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <img src="/Title.png" alt="Title" className="mb-8 animate-pulse-custom" />
      <div className="rounded-xl bg-white p-12 shadow-2xl transition-transform transform hover:scale-105 duration-200">
        <h1 className="text-3xl font-extrabold text-gray-700 mb-8">Welcome Challenger</h1>
        
        <div className="space-y-6">
          <button
            type="button"
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-lg font-semibold text-white shadow-md hover:from-blue-700 hover:to-blue-600 active:scale-95 transform transition-all duration-150"
            onClick={() => navigate("/options")}
          >
            Plan Challenge
          </button>
          <button
            type="button"
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-lg font-semibold text-white shadow-md hover:from-blue-700 hover:to-blue-600 active:scale-95 transform transition-all duration-150"
            onClick={() => navigate("/library")}
          >
            Flag Library
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
