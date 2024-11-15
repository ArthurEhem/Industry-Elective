import React, { useRef, useEffect } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log('Autoplay was prevented:', error);
        // Mute and retry play if autoplay is blocked
        audioRef.current.muted = true;
        audioRef.current.play().then(() => {
          audioRef.current.muted = false; // Unmute after successful play
        });
      }
    };

    playAudio();
  }, []);

  return (
    <audio ref={audioRef} src="/Background.mp3" loop></audio>
  );
}

export default MusicPlayer;
