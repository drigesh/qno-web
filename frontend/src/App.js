import './App.css';
import DownloadPage from './components/DownloadPage';
import FeaturesPage from './components/FeaturesPage';
import FrontPage from './components/FrontPage';
import Header from './components/Header';
import OwnSalonPage from './components/OwnSalonPage';
import ShopsPage from './components/ShopsPage';


function App() {
  return (
    <div className="App">

    <Header />
    <FrontPage />
    <ShopsPage />
    <FeaturesPage />
    <DownloadPage />
    <OwnSalonPage />
  
    </div>
  );
}

export default App;
