import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './HomePage'
import ContactUs from './ContactUs.js';
import AboutUs from './AboutUs.js';
import ShopDetails from './ShopDetails';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/shop" element={<ShopDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
