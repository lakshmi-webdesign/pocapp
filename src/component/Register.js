import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//import {  Outlet,Link } from 'react-router-dom';
function Register() {

  return (
    <div className='row container' style={{ margin: '50px auto' }}>
      <div className='container col-md-6' style={{ backgroundImage: "url('/images/grocery.jpg')" }}>
        {/* <img alt="abc" src='../images/grocery.jpg'/> */}
      </div>
      <Form className='container col-md-6'>
        <Form.Label >
          <h2>Sign Up</h2>
          <h6 style={{ textAlign: 'initial', marginTop: '40px' }}>Sign in to access your Orders, Offers and Wishlist.</h6>
        </Form.Label>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label className="d-flex">Name</Form.Label>
          <Form.Control className="d-flex" type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label className="d-flex">Email address</Form.Label>
          <Form.Control className="d-flex" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted d-flex" style={{ textAlign: 'initial' }}>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label className="d-flex">Mobile number</Form.Label>
          <Form.Control className="d-flex" type="number" placeholder="Enter mobile number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="d-flex">Password</Form.Label>
          <Form.Control className="d-flex" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="d-flex">Confirm Password</Form.Label>
          <Form.Control className="d-flex" type="password" placeholder="Re-enter Password" />
        </Form.Group>

        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <a href="#abc" className='d-block'>Already Signed in?</a>
      </Form>
    </div>
  );
}


export default Register;