import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './component/Home';
//import Adresses from './component/Addresses';
//import Account from './component/Account';
//import Orders from './component/Orders';
//import Header from './component/Header';
//import Footer from './component/Footer';
//import Login from './component/Login';

import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './component/Register';

function App() {


  return (
    <div className="App">
      <Register/>
      {/*<Login/>
       <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/addresses' element={<Adresses/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/orders' element={<Orders/>} />
          {/* <Route path='/login' element={<Login/>} />  
        </Routes>
      </Router>
      <Footer/> */}
      
  </div>
  );
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
export default App;