import React from 'react'
function Footer() {


  return (
    <div className='main-footer' style={{ backgroundColor: 'rgb(26, 37, 83)', color: 'white',left:"0",bottom:"0",right:"0" }}>
      <div className='container-fluid pt-5 pb-5'>
        <div className='row d-flex '>

          <div className='col'>
            <h4 style={{ textAlign: 'initial' }}>Popular Categories</h4>
            <ul className='list-unstyled' style={{ textAlign: 'initial' }}>
              <li>Vegetables and Fruits</li>
              <li>Munchies</li>
              <li>Breakfast and Instant Food</li>
              <li>Bakery and Biscuits</li>
              <li>Atta, Rice and Dal</li>
              <li>Sauces and Spreads</li>
              <li>Pharma and Wellness</li>
            </ul>
          </div>

          <div className='col' >
            <h4 style={{ textAlign: 'initial' }}>Customer Care</h4>
            <ul className='list-unstyled' style={{ textAlign: 'initial' }}>
              <li>Privacy</li>
              <li>Terms</li>
              <li>FAQ's</li>
              <li>Security</li>
              <li>Mobile</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className='col' >
            <h4 style={{ textAlign: 'initial' }}>Customer Care</h4>
            <ul className='list-unstyled' style={{ textAlign: 'initial' }}>
              <li>Privacy</li>
              <li>Terms</li>
              <li>FAQ's</li>
              <li>Security</li>
              <li>Mobile</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>


        <div className='col-12' >
          <h4 style={{ textAlign: 'initial' }}>Payment Partners</h4>
          <div className='row list-unstyled d-flex' style={{ textAlign: 'initial', backgroundColor: 'white', margin: 'auto', paddingBottom: '10px', paddingTop: '10px' }}>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/5fdcf0f548fbf112eec1.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/901d69d548e0feba09ab.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/989b1a681e449677450c.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/22eb5fa23ba3b6609751.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/ba6f4bc10ee998b5ef4a.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/faa9535d3774d52e399a.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/84d7815d39258e73dcde.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col'><img alt="Partner_Image" src="https://blinkit.com/97c6174b61b03e30fce9.png" style={{ width: '50px', marginRight: '10px' }} /></div>
            <div className='col' style={{ color: 'black', fontSize: '12px', margin: '15px 5px auto auto' }}>Net Banking</div>
            <div className='col' style={{ color: 'black', fontSize: '12px', margin: '15px 5px auto auto' }}>Cash on Delivery</div>

          </div>
        </div>

      </div>
      <div style={{ display: "grid" }}>
        <div style={{ gridColumn: '1', gridRow: "1" }}>

        </div>
        <div style={{ gridcolumn: '2', float: 'right' }}>Designed by Lakshmi, Mansi and Divhya</div>
      </div>
    </div>
  )
}

export default Footer