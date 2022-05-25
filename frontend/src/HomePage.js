// import './App.css';
import DownloadPage from './components/DownloadPage';
import FeaturesPage from './components/FeaturesPage';
import FrontPage from './components/FrontPage';
import Header from './components/Header';
import OwnSalonPage from './components/OwnSalonPage';
import ShopsPage from './components/ShopsPage';
import Footer from './components/Footer';
import StatsPage from './components/StatsPage';

export default function HomePage() {
  return (
    <div className="relative">
    <Header val={false}/>
    <FrontPage />
    <ShopsPage />
    <FeaturesPage />
    <DownloadPage />
    <StatsPage />
    <OwnSalonPage />
    <Footer />
    </div>
  );
}


