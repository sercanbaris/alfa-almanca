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

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <VideoCall />
      <About />
      <Success />
      <Exams />
      {/* <Services /> */}
      <Footer />
    </div>
  );
}

export default App;
