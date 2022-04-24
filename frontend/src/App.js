import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Carouselservices from './components/Carouselservices';
import Frontbanner from './components/Frontbanner';
import Features from './components/Features';
import Servicesdescription from './components/Servicesdescription';
function App() {
  return (
    <div className="App">
    <Header/>
    <Frontbanner/>
    <Servicesdescription/>
    <Carouselservices/>
    <Features/>
    <Footer/>
    </div>
  );
}

export default App;
