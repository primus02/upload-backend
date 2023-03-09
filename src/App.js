import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
