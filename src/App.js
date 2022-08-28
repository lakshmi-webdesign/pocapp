import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/products' element={<Product/>} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;
