import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <Router>
      <nav className="my-nav">
        <Link to="/" className="my-logo">Math Magicians</Link>
        <div className="link-container">
          <Link className="my-link" to="/">Home</Link>
          <Link className="my-link" to="/calculator">Calculator</Link>
          <Link className="my-link" to="/quote">Quote</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>

  // <Calculator />

  );
}

export default App;
