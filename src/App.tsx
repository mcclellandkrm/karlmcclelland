import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CursorFollow from './components/CursorFollow';
import Proof from './components/Proof';
import Offerings from './components/Offerings';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Trips from './components/Trips';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <CursorFollow />
      <Navigation />
      <Hero />
      <Proof />
      <Offerings />
      <Portfolio />
      <Process />
      <Trips />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
