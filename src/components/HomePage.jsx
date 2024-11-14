import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Transition,
  } from "@headlessui/react";
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { ChevronDownIcon } from "@heroicons/react/20/solid";
  
  import { continents } from "../data/continents";
  const difficultyOptions = ["Normal", "Hard"];
  
  function HomePage() {
    const [selectedContinent, setSelectedContinent] = useState(continents[0]);
    const [selectedDifficulty, setSelectedDifficulty] = useState(difficultyOptions[0]);
  
    const navigate = useNavigate();
  
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="rounded-md bg-white p-12 shadow-md">
          <div className="mt-10">
            <label htmlFor="continent" className="block text-sm font-medium">
              Continent
            </label>
            <Listbox value={selectedContinent} onChange={setSelectedContinent}>
              <ListboxButton className="relative mt-2 block w-96 cursor-default rounded-md p-2 text-left text-sm ring-1 ring-inset ring-gray-300">
                {selectedContinent.name}
                <ChevronDownIcon
                  className="group pointer-events-none absolute right-2.5 top-2.5 size-4"
                  aria-hidden="true"
                />
              </ListboxButton>
              <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions
                  anchor="bottom"
                  className="mt-2 w-[var(--button-width)] rounded-md bg-white py-2 text-left text-sm shadow-md ring-1 ring-gray-300"
                >
                  {continents.map((continent, index) => (
                    <ListboxOption
                      key={index}
                      value={continent}
                      className="cursor-default select-none p-2 data-[focus]:bg-blue-600 data-[focus]:text-white"
                    >
                      {continent.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </Listbox>
          </div>
          <div className="mt-10">
            <label htmlFor="difficulty" className="block text-sm font-medium">
              Difficulty
            </label>
            <Listbox value={selectedDifficulty} onChange={setSelectedDifficulty}>
              <ListboxButton className="relative mt-2 block w-96 cursor-default rounded-md p-2 text-left text-sm ring-1 ring-inset ring-gray-300">
                {selectedDifficulty}
                <ChevronDownIcon
                  className="group pointer-events-none absolute right-2.5 top-2.5 size-4"
                  aria-hidden="true"
                />
              </ListboxButton>
              <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions
                  anchor="bottom"
                  className="mt-2 w-[var(--button-width)] rounded-md bg-white py-2 text-left text-sm shadow-md ring-1 ring-gray-300"
                >
                  {difficultyOptions.map((difficulty, index) => (
                    <ListboxOption
                      key={index}
                      value={difficulty}
                      className="cursor-default select-none p-2 data-[focus]:bg-blue-600 data-[focus]:text-white"
                    >
                      {difficulty}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </Listbox>
          </div>

          <div className="mt-24">
            <button
              type="button"
              className="w-96 rounded-md bg-blue-600 p-2 text-sm font-semibold text-white hover:bg-blue-700 active:bg-blue-800"
              onClick={() => {
                navigate("/game", {
                  state: {
                    continent: selectedContinent,
                    difficulty: selectedDifficulty.toLowerCase(),
                  },
                });
              }}
            >
              Play
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default HomePage;
  