import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Application from './pages/application/Application';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Contact from './pages/contact/Contact';


function App() {
  return (
  <>
    <Router>
      <Navbar/>
      <Header/>

      <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login  />} />
       <Route path="/signup" element={<Signup  />} />
       <Route path="/contact" element={<Contact  />} />
       <Route path="/application" element={<Application />} />

      </Routes>
      
    </Router>
  </>
  );
}

export default App;
