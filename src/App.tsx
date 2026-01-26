import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import GoogleCertified from './components/GoogleCertified';
import WhyVirtualTour from './components/WhyVirtualTour';
import SpecialOffer from './components/SpecialOffer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <GoogleCertified />
      <Portfolio />
      <About />
      <WhyVirtualTour />
      <HowItWorks />
      <SpecialOffer />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
