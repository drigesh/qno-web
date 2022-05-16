import './App.css';
import Footer from './components/Footer';
import Carouselservices from './components/Carouselservices';
import Frontbanner from './components/Frontbanner';
import Features from './components/Features';
import Servicesdescription from './components/Servicesdescription';
import Testimonial from './components/Testimonial';
import Checkin from './components/Checkin';
import HamburgerHeader from './components/HamburgerHeader';

function App() {
  return (
    <div className="App">
    <HamburgerHeader/>
    <Frontbanner/>
    <Servicesdescription/>
    <Carouselservices/>
    <Features/>
    <Checkin/>
    <Testimonial/>
    <Footer/>
  
    </div>
  );
}

export default App;
