import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Feature from "./pages/Feature";
import VideoCall from "./pages/VideoCall";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Success from "./pages/Success";
import Exams from "./pages/Exams";
import ScrollToTopButton from "./pages/ScrollToTopButton";
import YouTubePlayer from "./pages/YouTubePlayer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function HomePage() {
  return (
    <>
      <Hero />
      <Feature />
      <VideoCall />
      <About />
      <Success />
      <Exams />
      <YouTubePlayer />
    </>
  );
}

function App() {
  return (
    <div>
      <ScrollToTopButton />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
