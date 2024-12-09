import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const MusicPlayer = forwardRef((props, ref) => {
  const { src, volume } = props;
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
    },
    setVolume: (newVolume) => {
      audioRef.current.volume = newVolume;
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

  useEffect(() => {
    audioRef.current.volume = volume !== undefined ? volume : 1;
  }, [volume]);

  return (
    <audio ref={audioRef} src={src} loop></audio>
  );
});

export default MusicPlayer;
