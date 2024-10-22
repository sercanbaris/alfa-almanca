import "./App.css";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Feature from "./pages/Feature";
import VideoCall from "./pages/VideoCall";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Success from "./pages/Success";
import Exams from "./pages/Exams";
import Services from "./pages/Services";
import ScrollToTopButton from "./pages/ScrollToTopButton";
import YouTubePlayer from "./pages/YouTubePlayer";

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
    <div>
      <ScrollToTopButton />
      <Header />
      <Hero />
      <Feature />
      <VideoCall />
      <About />
      <Success />
      <Exams />
      {/* <Services /> */}
      <YouTubePlayer playlist={playlist} />
      <Footer />
    </div>
  );
}

export default App;
