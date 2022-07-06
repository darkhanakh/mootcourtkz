import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutContest from './Pages/AboutContest';
import Participation from './Pages/Participation';

import Results from './Pages/Results';
import Organizers from './Pages/Organizers';
import Archive from './Pages/Archive';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutContest />} />
          <Route path="/organizers" element={<Organizers />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/participation" element={<Participation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
