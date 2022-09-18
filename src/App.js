import React , {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './component/Home';

import Header from './component/Header';
import Footer from './component/Footer';
import Login from './component/Login';
import Register from './component/Register';
import BalanceEnquiry from './component/BalanceEnquiry';

import Registration1 from './component/Registration1';
import Dashboard from './component/Dashboard';
import FundTransfer from './component/FundTransfer';
import Ministatement from './component/Ministatement';
import Customizedstatement from './component/Customizedstatement';
import Forgotpassword from './component/Forgotpassword';
import Manager from './component/Manager';

function App() {
  const [show, setshow] =  useState(true);
  //const showheader = () => setshow(!show);

  return (
    <div className="App">
      
      <Router>
      {show?<Header />  :null}     
        <Routes>
          <Route path='/' exact index element={<Home />} />
          <Route path='/balanceenquiry' element={<BalanceEnquiry />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/registration1' exact element={<Registration1 />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/fundtransfer" element={<FundTransfer />} />
          <Route path="/ministatement" element={<Ministatement />} />
          <Route path="/customizedstatement" element={<Customizedstatement />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/manager" element={<Manager setshow={setshow}/>} />
          <Route path='/redirect' element={<Navigate to="/error-page" />} />
        </Routes>
      </Router>

      {show?<Footer style={{ left: '0', bottom: '0', right: '0' }} />:null}


    </div>
  );
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
export default App;