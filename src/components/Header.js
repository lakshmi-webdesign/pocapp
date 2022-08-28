import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Outlet, Link } from 'react-router-dom';
import { SidebarData } from './SideBar';
import './Header.css';
import { IconContext } from 'react-icons';
import { Navbar} from 'react-bootstrap'


function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <Navbar expand="md" className="scrolled" style={{backgroundColor:'lawngreen'}}>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
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
      </IconContext.Provider>
      </Navbar>
    </>
  )
}

export default Header

// import React from 'react'

// import { Navbar, Nav, Container , NavDropdown ,Form,FormControl ,Button} from "react-bootstrap";

// function Header() {

//   return (

//     <Navbar expand="md" className="scrolled" style={{backgroundColor:'lawngreen'}}>

//     <Container>

//       <Navbar.Brand href="/">

//         <img alt="Logo" />

//       </Navbar.Brand>

     

//       <div class="d-flex" style={{width: '-webkit-fill-available'}}>

//       <Form className="col d-flex " >  

//           <FormControl  

//             type="search"  

//             placeholder="Search"  

//             className="mr-sm-2"  

//             aria-label="Search"  

//           />  

//           </Form>

 

//       <Navbar.Collapse id="basic-navbar-nav" style={{flexGrow: "0"}}>

//           <Nav className="ms-auto">

//           <NavDropdown title='Account' id='basic-nav-dropdown'>

//     <NavDropdown.Item >My Account</NavDropdown.Item>

//     <NavDropdown.Item >My Orders</NavDropdown.Item>

//     <NavDropdown.Item >Saved Address</NavDropdown.Item>

//     <NavDropdown.Item >My Wallet</NavDropdown.Item>

//     <NavDropdown.Item >FAQ's</NavDropdown.Item>

//     <NavDropdown.Item >Log Out</NavDropdown.Item>

//   </NavDropdown>

 

// <Button variant="outline-success">MyCart</Button>

//         </Nav>

//       </Navbar.Collapse>

 

//       <Navbar.Toggle aria-controls="basic-navbar-nav">

//         <span className="navbar-toggler-icon"></span>

//       </Navbar.Toggle>

//       </div>

     

//     </Container>

//   </Navbar>

//   )

// }

 

// export default Header

 