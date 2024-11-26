import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const MusicPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current.play();
    },
    pause: () => {
      audioRef.current.pause();
    },
    isPlaying: () => {
      return !audioRef.current.paused;
    }
  }));

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log('Autoplay was prevented:', error);
        document.addEventListener('click', () => {
          audioRef.current.play();
        }, { once: true });
      }
    };

    playAudio();
  }, []);

  return (
    <audio ref={audioRef} src="/Background.mp3" loop></audio>
  );
});

export default MusicPlayer;
