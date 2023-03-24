import './App.css';
import Hero from './components/Hero';
import Plan from './components/Plan';
import Program from './components/Program';
import Reasons from './components/Reasons';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program />
      <Reasons/>
      <Plan/>
    </div>
  );
}

export default App;
