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

const playlist = ["Nz8uTe0wDQ8", "932CXJspKeY", "WfdpsvBwgB0"];

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
