import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Application from './pages/application/Application';

function App() {
  return (
  <>
    <Router>

      <Navbar/>

      <Routes>

<<<<<<< HEAD
        <Route path="/home" element={<Home />} />
        <Route path="/application" element={<Application />} />
=======
        <Route path="/" element={<Home />} />
>>>>>>> 5c43f683572bee3847394ea95e196bda05f9374b

      </Routes>
      
    </Router>
  </>
  );
}

export default App;
