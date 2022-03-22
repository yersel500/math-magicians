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
      <nav>
        <Link to='/'>Math Magicians</Link>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/calculator'>Calculator</Link>
          <Link to='/quote'>Quote</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/quote' element={<Quote />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>

      // <Calculator />

  );
}

export default App;
