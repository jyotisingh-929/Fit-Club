import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Join from './components/Join';
import Journey from './components/Journey';
import Program from './components/Program';
import Reasons from './components/Reasons';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Journey/>
      <Testimonial/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
