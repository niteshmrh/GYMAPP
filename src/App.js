import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Plan from "./components/Plan";
import Program from "./components/Program";
import Reasons from "./components/Reasons";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plan />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
