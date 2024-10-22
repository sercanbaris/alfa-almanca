import React, { useState } from "react";
import YouTube from "react-youtube";
import "../css/YouTubePlayer.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

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

  return (
    <div className="youtube-player">
      <button className="prev-button" onClick={handlePrev}>
        <FaArrowLeft />
      </button>
      <YouTube videoId={playlist[currentIndex]} />
      <button className="next-button" onClick={handleNext}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default YouTubePlayer;
