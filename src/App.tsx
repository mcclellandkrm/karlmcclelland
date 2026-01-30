import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CursorFollow from './components/CursorFollow';
import Services from './components/Services';
import GoogleCertified from './components/GoogleCertified';
import WhyVirtualTour from './components/WhyVirtualTour';
import SpecialOffer from './components/SpecialOffer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import BoldStatement from './components/BoldStatement';
import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <CursorFollow />
      <Navigation />
      <Hero />
      <Services />
      <GoogleCertified />
      <Portfolio />
      <ClientLogos />
      <About />
      <WhyVirtualTour />
      <HowItWorks />
      <BoldStatement />
      <SpecialOffer />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
