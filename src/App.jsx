import React, { Suspense, lazy } from "react";
import "./App.css";

const Success = lazy(() => import("./pages/Success"));
const Exams = lazy(() => import("./pages/Exams"));
const ScrollToTopButton = lazy(() => import("./pages/ScrollToTopButton"));
const YouTubePlayer = lazy(() => import("./pages/YouTubePlayer"));
const Header = lazy(() => import("./pages/Header"));
const Hero = lazy(() => import("./pages/Hero"));
const Feature = lazy(() => import("./pages/Feature"));
const VideoCall = lazy(() => import("./pages/VideoCall"));
const About = lazy(() => import("./pages/About"));
const Footer = lazy(() => import("./pages/Footer"));

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

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <ScrollToTopButton />
        <Header />
        <Hero />
        <Feature />
        <VideoCall />
        <About />
        <YouTubePlayer playlist={playlist} />
        <Success />
        <Exams />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
