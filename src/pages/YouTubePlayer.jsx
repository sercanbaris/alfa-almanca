import React, { useState } from "react";
import ReactPlayer from "react-player";

import "../css/YouTubePlayer.css";

const YouTubePlayer = () => {
  // Playlist array
  const playlist = [
    "Nz8uTe0wDQ8",
    "932CXJspKeY",
    "WfdpsvBwgB0",
    "Bpr65cMj6Zo",
    "-FVt43nLWzA",
    "PA9yJKyvLI8",
    "3B7TUl_5gpc",
    "TcP8wbsJRoQ",
    "5E5tN_SG3T8",
    "YYbglq8UMe8",
    "eG2MLPKTCjE",
    "wPCtuOnphaY",
  ];

  // State to track the current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Handle video switch
  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div
      className="youtube-player "
      style={{ textAlign: "center", padding: "5px" }}
    >
      <h1 className="video-title">Öğrenci Yorumları ve Başarıları</h1>

      {/* React Player */}
      <div style={{ margin: "20px auto", maxWidth: "720px" }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${playlist[currentVideoIndex]}`}
          controls
          width="100%"
          height="400px"
        />
      </div>

      {/* Buttons for video navigation */}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        {playlist.map((video, index) => (
          <button
            key={index}
            onClick={() => handleVideoChange(index)}
            style={{
              padding: "10px 20px",
              margin: "5px",
              backgroundColor:
                currentVideoIndex === index
                  ? "var(--alfaBlue)"
                  : "var(--alfaOrange)",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YouTubePlayer;
