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
      <h1 className="video-title">Öğrenci Yorumları ve Başarıları</h1>
      <button className="prev-button" onClick={handlePrev}>
        {window.innerWidth <= 768 ? "←" : <FaArrowLeft />}
      </button>
      <YouTube
        className="fullle"
        opts={
          window.innerWidth <= 768 ? { width: "100%", maxHeight: "100vh" } : {}
        }
        videoId={playlist[currentIndex]}
      />
      <button className="next-button" onClick={handleNext}>
        {window.innerWidth <= 768 ? "→" : <FaArrowRight />}
      </button>
    </div>
  );
};

export default YouTubePlayer;
