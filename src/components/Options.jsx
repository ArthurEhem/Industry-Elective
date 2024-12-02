import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { continents } from "../data/continents";
import NavigationBar from "./NavigationBar";

const difficultyOptions = ["Normal", "Hard"];

function Options() {
  const [selectedContinent, setSelectedContinent] = useState(continents[0]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficultyOptions[0]);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <NavigationBar />
      <div className="rounded-xl bg-white p-12 shadow-2xl transition-transform transform hover:scale-105 duration-200">
        <h1 className="text-3xl font-extrabold text-gray-700 mb-8">Select Your Preferences</h1>
        
        <div className="space-y-10">
          <div>
            <label htmlFor="continent" className="block text-sm font-medium text-gray-600">
              Continent
            </label>
            <Listbox value={selectedContinent} onChange={setSelectedContinent}>
              <ListboxButton className="relative mt-2 block w-full cursor-pointer rounded-md p-3 bg-gray-50 text-left text-sm shadow-sm hover:bg-gray-100 ring-1 ring-gray-300">
                {selectedContinent.name}
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-3 w-5 h-5 text-gray-400" aria-hidden="true" />
              </ListboxButton>
              <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <ListboxOptions className="mt-2 w-full rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-300">
                  {continents.map((continent, index) => (
                    <ListboxOption key={index} value={continent} className={({ active }) => `cursor-pointer select-none p-2 ${active ? "bg-blue-600 text-white" : "text-gray-700"}`}>
                      {continent.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </Listbox>
          </div>

          <div>
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-600">
              Difficulty
            </label>
            <Listbox value={selectedDifficulty} onChange={setSelectedDifficulty}>
              <ListboxButton className="relative mt-2 block w-full cursor-pointer rounded-md p-3 bg-gray-50 text-left text-sm shadow-sm hover:bg-gray-100 ring-1 ring-gray-300">
                {selectedDifficulty}
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-3 w-5 h-5 text-gray-400" aria-hidden="true" />
              </ListboxButton>
              <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <ListboxOptions className="mt-2 w-full rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-300">
                  {difficultyOptions.map((difficulty, index) => (
                    <ListboxOption key={index} value={difficulty} className={({ active }) => `cursor-pointer select-none p-2 ${active ? "bg-blue-600 text-white" : "text-gray-700"}`}>
                      {difficulty}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </Listbox>
          </div>
        </div>

        <div className="mt-12">
          <button
            type="button"
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-lg font-semibold text-white shadow-md hover:from-blue-700 hover:to-blue-600 active:scale-95 transform transition-all duration-150"
            onClick={() => {
              navigate("/game", {
                state: {
                  continent: selectedContinent,
                  difficulty: selectedDifficulty.toLowerCase(),
                },
              });
            }}
          >
            Begin Challenge!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Options;
