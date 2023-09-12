import './App.css';

import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
import { Join } from './components/Join';
import { Programs } from './components/Programs';
import { Reasons } from './components/Reasons';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
    </div>
  );
}

export default App;
