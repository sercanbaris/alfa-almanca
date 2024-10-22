import React, { useState } from "react";
import YouTube from "react-youtube";
import "../css/YouTubePlayer.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const YouTubePlayer = ({ playlist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="youtube-player" {...handlers}>
      <button className="prev-button" onClick={handlePrev}>
        ←
      </button>
      <YouTube videoId={playlist[currentIndex]} />
      <button className="next-button" onClick={handleNext}>
        →
      </button>
    </div>
  );
};

export default YouTubePlayer;
