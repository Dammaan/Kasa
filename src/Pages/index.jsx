import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../Styles/css/style.css';
import Home from './Home/Home';
import Header from '../Components/Header';
import Error from './Error/Error';
import Apropos from './About/About';
import HouseForm from './HouseForm/HouseForm';
import Footer from '../Components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>

      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fichelogement" element={<HouseForm />} />
        <Route path="*" element={<Error />} /> 
      </Routes>

      <Footer />
    </Router>
  </StrictMode>
);