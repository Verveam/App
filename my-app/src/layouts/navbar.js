import React, { Component } from 'react'
import {Navbar, Nav, Button} from "react-bootstrap"

import { Outlet,Link } from "react-router-dom"


export default class NavBar extends Component  {
    render(){
    return(
        <>
    <header class="header">
        
        <Navbar className="navBg" variant="red" expand="lg">
        <div className="mx-4">
            
            <img src="../CIRCULO.png"  width="100"></img><b>CIRCULO</b></div>
            
                <Navbar.Brand as={Link} to="/" ><i className="fa-solid fa-screwdriver-wrench "></i><i class="fa-solid fa-cat"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">

                    <Nav.Link as={Link} to="/" >HOME</Nav.Link>
                    <Nav.Link as={Link} to="/about">PRODUCTO</Nav.Link>
                    <Nav.Link as={Link} to="/contact">CONTACTO</Nav.Link>
                    <Nav.Link as={Link} to="/inscribirse"><Button>INCRIBASE</Button></Nav.Link>


                </Nav>
                </Navbar.Collapse>
            
        </Navbar>
    </header> 
    
        
        <section>
            <Outlet></Outlet>
        </section>


        </>
    )
    }
}
//export default NavBarExample