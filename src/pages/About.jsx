import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import MusicPlayer from "../components/MusicPlayer";  
import hoverSound from '/Hover.mp3';
import clickSound from '/Click.mp3';

const About = () => {
  const navigate = useNavigate();
  const audioRef = useRef(new Audio(hoverSound));
  const clickAudioRef = useRef(new Audio(clickSound));
  const musicPlayerRef = useRef(null);

  const playHoverSound = () => { 
    audioRef.current.currentTime = 0; 
    audioRef.current.play(); 
  };

  const playClickSound = () => { 
    clickAudioRef.current.currentTime = 0; 
    clickAudioRef.current.play(); 
  };

  const teamMembers = [
    {
      name: "Arthur P. Ehem",
      email: "arthur.ehem@cit.edu",
      img: "/Pic01.png"
    },
    {
      name: "Gerard Tac-an",
      email: "gerard.tac-an@cit.edu",
      img: "/Pic02.png"
    },
    {
      name: "Caaway, Levi Ray T.",
      email: "leviray.caaway@cit.edu",
      img: "/Pic03.png"
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <NavigationBar toggleMusic={() => musicPlayerRef.current.togglePlay()} /> {/* Pass the toggleMusic function */}
      <MusicPlayer ref={musicPlayerRef} src="/Loop02.mp3" volume={0.5} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/Flags01.gif)',
          backgroundSize: '100%',
          backgroundPosition: 'top',
          opacity: 0.1,
          zIndex: 0, // Ensure the background is behind all other content
        }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <h1 className="text-4xl font-extrabold mb-8 z-10">About Us</h1>
      <div className="flex flex-col items-center justify-center space-y-8 z-10">
        <div className="flex space-x-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={member.img} alt={`${member.name}`} className="w-32 h-32 object-cover" />
              <p className="text-xl font-semibold mt-4">{member.name}</p>
              <p className="text-sm">{member.email}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => { playClickSound(); navigate("/"); }}
          onMouseEnter={playHoverSound}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default About;
