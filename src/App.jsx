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


const whatsAppNo = "+90 505 974 90 00";
const whatsAppLink = "https://wa.me/905059749000?text=Merhabalar%2C%20%C3%BCcretsiz%20%C3%B6n%20g%C3%B6r%C3%BC%C5%9Fme%20i%C3%A7in%20randevu%20alabilir%20miyim%3F"

function HomePage() {
  return (
    <>
      <Hero whatsAppNo={whatsAppNo} whatsAppLink={whatsAppLink} />
      <Feature />
      <VideoCall whatsAppLink={whatsAppLink} />
      <About />
      <Success whatsAppLink={whatsAppLink} />
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
