import React, { useState, useEffect, useCallback } from "react";
import YouTube from "react-youtube";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../css/YouTubePlayer.css";

const YouTubePlayer = ({ playlist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleNext = useCallback(
    debounce(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    }, 300),
    []
  );

  const handlePrev = useCallback(
    debounce(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length
      );
    }, 300),
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="youtube-player">
      <h1 className="video-title">Öğrenci Yorumları ve Başarıları</h1>

      <button
        className={isMobile ? "prev-button mobile" : "prev-button"}
        onClick={handlePrev}
      >
        {isMobile ? "< Önceki" : <FaArrowLeft />}
      </button>

      <YouTube
        className="fullle"
        opts={isMobile ? { width: "100%", maxHeight: "100vh" } : {}}
        videoId={playlist[currentIndex]}
      />

      <button
        className={isMobile ? "next-button mobile" : "next-button"}
        onClick={handleNext}
      >
        {isMobile ? "Sonraki >" : <FaArrowRight />}
      </button>
    </div>
  );
};

export default YouTubePlayer;
