import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Outlet,Link } from 'react-router-dom';
function Login() {
 
      return (
        <div className='row container' style={{margin:'50px auto'}}>
        <div className='container col-md-6'>Abc</div>
        <Form className='container col-md-6'>
        <Form.Label >
          <h2>Sign In </h2>
          <h6 style={{textAlign: 'initial',marginTop:'40px'}}>Sign in to access your Orders, Offers and Wishlist.</h6>
          </Form.Label>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="d-flex">Email address</Form.Label>
            <Form.Control className="d-flex" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted d-flex" style={{textAlign: 'initial'}}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="d-flex">Password</Form.Label>
            <Form.Control className="d-flex" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
            <Form.Check  type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <a href="#" className='d-block'>Forgot Password?</a>
        </Form>
        </div>
      );
    }
    

export default Login;