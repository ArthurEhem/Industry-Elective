import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NavigationBar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-8 py-4 shadow-lg text-white flex items-center">
      {/* Logo */}
      <div
        className="text-5xl font-extrabold cursor-pointer hover:text-pink-300 transition-all mr-8"
        onClick={() => navigate("/")}
      >
        🌍
      </div>

      {/* Links */}
      <ul className="flex items-center space-x-8">
        {/* Games with Dropdown */}
        <li className="relative group">
          <button
            className="text-2xl font-medium cursor-pointer hover:text-pink-300 transition-all"
            onClick={toggleDropdown}
          >
            Games
          </button>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-52 bg-white text-gray-800 shadow-xl rounded-lg py-2 transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
              <li
                className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                onClick={() => {
                  navigate("/options");
                  setIsDropdownOpen(false); // Close dropdown
                }}
              >
                World Flag Challenge
              </li>
              <li
                className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                onClick={() => {
                  navigate("/ContinentGuessGame");
                  setIsDropdownOpen(false); // Close dropdown
                }}
              >
                Continent Quiz Game
              </li>
            </ul>
          )}
        </li>

        {/* Flags */}
        <li
          className="text-2xl font-medium cursor-pointer hover:text-pink-300 transition-all"
          onClick={() => navigate("/library")}
        >
          Flags
        </li>

        {/* About */}
        <li
          className="text-2xl font-medium cursor-pointer hover:text-pink-300 transition-all"
          onClick={() => navigate("/about")}
        >
          About
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
