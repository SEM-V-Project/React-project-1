import React , { useState, useContext }from 'react'
import {FaSearch,FaUser} from 'react-icons/fa'
import {Navbar,Nav,Form,Button,FormControl,Collapse,NavItem,NavLink} from 'react-bootstrap'
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom'
import { UserContext } from "../context/UserContext";
import "../App.css"

export default function NavBar() {
    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
<>

  <Navbar bg="light" variant="light" fixed="top" className="textFormatting">
    <Navbar.Brand href="#home" style={{paddingRight: "30px"}}>Resumely</Navbar.Brand>
    <Navbar className="mr-auto" >
      <Nav.Link href="#home" style={{paddingRight: "30px"}}><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#features" style={{paddingRight: "30px"}}><Link to ="./builder">Build Resume</Link></Nav.Link>
      <Nav.Link href="#pricing" style={{paddingRight: "30px"}}><Link to ="/support" >Support</Link></Nav.Link>
      <Nav.Link href="#"style={{paddingRight: "450px"}}><Link to ="/feedback" >Feedback</Link></Nav.Link>
    
    <Form inline >
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="srchButton" ><FaSearch/></Button>

    </Form>

        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => {
                  context.setUser(null);
                }}
                style={{paddingLeft: "30px"}}
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" style={{paddingLeft: "30px"}}>
                <Link to ="/signup">
                  Signup
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin"  style={{paddingLeft: "30px"}}>
                <Link to ="/signin">
                  Signin
                  </Link>
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>

  </Navbar>
</>
                  
        
 
     )
}
