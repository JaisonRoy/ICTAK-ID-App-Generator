import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Application from './pages/application/Application';

function App() {
  return (
  <>
    <Router>

      <Header/>

      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/application" element={<Application />} />

      </Routes>
      
    </Router>
  </>
  );
}

export default App;
