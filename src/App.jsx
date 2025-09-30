import "./App.css";
import Body from "./Components/Body";
import Hero from "./Components/HeroSection/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
      </div>
      <Body></Body>
      <Footer></Footer>
    </>
  );
}
export default App;
