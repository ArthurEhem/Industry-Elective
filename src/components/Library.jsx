import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { continents } from "../data/continents";
import NavigationBar from "./NavigationBar";

function Library() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen">
      <NavigationBar /> {/* Include the Navigation Bar */}

      {/* Adjusted Back Button */}
      <button
        onClick={() => navigate("/", { replace: true })}
        className="absolute top-20 right-10 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg shadow-lg"
      >
        Back
      </button>

      {/* Flag Library Container */}
      <div className="relative rounded-xl bg-white p-12 shadow-2xl transition-transform transform hover:scale-105 duration-200 w-full max-w-7xl mt-20">
        <h1 className="text-3xl font-extrabold text-gray-700 mb-8">Flag Library</h1>
        <div className="space-y-6 max-h-screen overflow-auto">
          {continents.map((continent) => (
            <div key={continent.name}>
              <h2 className="text-2xl font-semibold text-gray-800">{continent.name}</h2>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {continent.countries.map((country) => (
                  <div key={country.code} className="flex flex-col items-center">
                    <img
                      src={`/flags/${country.code}.png`}
                      alt={`${country.name} flag`}
                      className="w-20 h-12 object-cover mb-2"
                    />
                    <span className="text-sm text-gray-700">{country.name}</span>
                  </div>
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
