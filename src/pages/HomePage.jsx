import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavigationBar from "../components/NavigationBar";

function HomePage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  // Function to handle opening and closing the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModalOnClickOutside = (e) => {
    // Close the modal if the background is clicked
    if (e.target.id === "modal-overlay") {
      setShowModal(false);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center bg-gradient-to-br from-blue-100 to-blue-300">
      <NavigationBar /> {/* Include the Navigation Bar */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <img src="/Title.png" alt="Title" className="mb-8 animate-pulse-custom" />
        <button
            type="button"
            className="w-full max-w-md rounded-3xl bg-gradient-to-r from-blue-600 to-pink-500 py-3 text-5xl font-bold text-white shadow-lg hover:from-blue-700 hover:to-pink-400 active:scale-95 transform transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-pulse-custom"
            style={{
              fontFamily: "'Baloo', sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
            onClick={toggleModal}
          >
            PLAY
        </button>
      </div>

      {/* Modal for displaying options */}
      {showModal && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          onClick={closeModalOnClickOutside}
        >
          <div className="relative bg-gradient-to-br from-blue-300 to-pink-300 p-8 rounded-lg shadow-xl w-96 max-w-md transform transition-all duration-300 ease-in-out scale-110">
            {/* X button in the top-right corner */}
            <button
              className="absolute top-0.5 right-2 text-gray-800 text-xl font-bold hover:text-red-500"
              onClick={toggleModal}
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">Choose an Option</h2>
            <div className="space-y-4">
              <button
                className="w-full rounded-lg bg-white py-2 text-lg font-semibold text-purple-600 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={() => navigate("/options")}
              >
                World Flag Challenge
              </button>
              <button
                className="w-full rounded-lg bg-white py-2 text-lg font-semibold text-purple-600 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={() => navigate("/ContinentGuessGame")}
              >
                Continent Quiz Game
              </button>
              <button
                className="w-full rounded-lg bg-white py-2 text-lg font-semibold text-purple-600 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={() => navigate("/library")}
              >
                More About the Flags
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
