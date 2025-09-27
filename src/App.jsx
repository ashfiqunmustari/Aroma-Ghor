import "./App.css";
import Body from "./Components/Body";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Hero />
      </div>
      <Body></Body>
    </>
  );
}
export default App;
