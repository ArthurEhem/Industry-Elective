import React from "react";
import { continents } from "../data/continents";

function Library() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 overflow-auto">
      <div className="rounded-xl bg-white p-12 shadow-2xl transition-transform transform hover:scale-105 duration-200">
        <h1 className="text-3xl font-extrabold text-gray-700 mb-8">Flag Library</h1>
        
        <div className="space-y-6 max-h-screen overflow-auto">
          {continents.map((continent) => (
            <div key={continent.name}>
              <h2 className="text-2xl font-semibold text-gray-800">{continent.name}</h2>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {continent.countries.map((country) => (
                  <div key={country.code} className="flex flex-col items-center">
                    <img src={`/flags/${country.code}.png`} alt={`${country.name} flag`} className="w-20 h-12 object-cover mb-2" />
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
