import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../context'

export default function Navigation() {
    const {Logout} = useGlobalContext();
    const {guest} = useGlobalContext();
    return (
        
        <Navbar bg="light" expand="lg" style={{backgroundImage:"linear-gradient(to right, #5f2c82, #49a09d)"}}>
            <Navbar.Brand style={{fontFamily:"Lobster",color:"white"}}>World Hapinnes Ranking</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link ><Link to="/home" style={{color:"black",textDecoration:"none"}}>Home</Link></Nav.Link>
                <Nav.Link ><Link to="/about" style={{color:"black",textDecoration:"none"}}>About</Link></Nav.Link>
                <Nav.Link onClick={()=>{Logout()}}><Link to="/" style={{color:"black",textDecoration:"none"}}>{guest?"login":"logout"}</Link></Nav.Link>
                
               
                </Nav>
               
            </Navbar.Collapse>
        </Navbar>
    )
}
