import "./App.css";
import Body from "./Components/Body";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Hero />
      </div>
      <Body></Body>
      <Footer></Footer>
    </>
  );
}
export default App;
