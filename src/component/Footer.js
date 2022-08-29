import React from 'react'

function Footer() {
  return (
    <div className='main-footer' style={{backgroundColor:'black',color:'white'}}>
        <div className='container-fluid pt-5 pb-5'>
          <div className='row d-flex '>

            <div className='col-md-4 '>
              <h4 style={{textAlign:'initial'}}>Popular Categories</h4>
              <ul className='list-unstyled' style={{textAlign:'initial'}}>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>

            <div className='col-md-4 ' >
              <h4 style={{textAlign:'initial'}}>Customer Care</h4>
              <ul className='list-unstyled' style={{textAlign:'initial'}}>
                <li>Privacy</li>
                <li>Terms</li>
                <li>FAQ's</li>
                <li>Security</li>
                <li>Mobile</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className='col-md-4' >
              <h4 style={{textAlign:'initial'}}>Contact Us</h4>
              <ul className='list-unstyled' style={{textAlign:'initial'}}>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>

            <div className='col-md-4' >
              <h4 style={{textAlign:'initial'}}>Contact Us</h4>
              <ul className='list-unstyled' style={{textAlign:'initial'}}>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Footer