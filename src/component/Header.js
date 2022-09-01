import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Outlet, Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import './Header.css';
import { IconContext } from 'react-icons';
import { Nav, Button, Navbar, Form, FormControl } from 'react-bootstrap'

import "react-bootstrap/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login';

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [isloggedin, setLoginstate] = useState(true);
  const loggedinorout = () => setLoginstate(!isloggedin);

  return (
    <>
      <Navbar expand="md" className="scrolled shadow p-2 mb-3 bg-white rounded" style={{ backgroundColor: 'lawngreen' }}>
        <Navbar.Brand href="/" style={{ marginLeft: '20px', color: 'darkgreen', fontWeight: '900' }}>
          XorCart
        </Navbar.Brand>

        <div class="d-flex search" style={{ width: '-webkit-fill-available', marginRight: '15px' }}>
          <Form className="d-flex " style={{ width: '95.666667%', margin: 'auto' }}>
            <FormControl type="search" placeholder="Search for Products" className="mr-sm-2" aria-label="Search"></FormControl>
            <button class="input-group-text" id="basic-addon1" style={{ fontWeight: 'bold' }}>⌕</button>
          </Form>
        </div>

        <Nav className="account ms-auto" id="account" >
          <Button variant="cart outline-success" style={{ backgroundColor: 'green', color: 'white' }}>MyCart</Button>
        </Nav>

        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar' style={{ marginLeft: '20px', flex: 'none', marginRight: '20px' }}>
            <Link to='#' className='menu-bars ' onClick={showSidebar} >
              <FaIcons.FaUser style={{ color: 'black', marginRight: '10px' }} />
              {isloggedin ? <div class="navbar-brand name " id="name">welcome</div> : <div class="navbar-brand name " id="name">Sign In</div>}
            </Link>
          </div>
        </IconContext.Provider>

        <div className={!isloggedin} >

        </div>

        <nav className={sidebar && isloggedin ? 'nav-menu active' : 'nav-menu'} style={{ overflowX: 'hidden' }}>
          <ul className='nav-menu-items' onClick={showSidebar} style={{ paddingLeft: '0rem' }}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose style={{ color: 'white' }} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  <Outlet />
                </li>
              );
            })}
          </ul>
        </nav>

      </Navbar>
    </>
  )
}

export default Header