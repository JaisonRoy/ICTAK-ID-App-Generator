import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
    <Router>

      <Header/>

      <Routes>

        <Route path="/home" element={<Home />} />

      </Routes>
      
    </Router>
  </>
  );
}

export default App;
