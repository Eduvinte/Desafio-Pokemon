import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

// Pictures
import Pokemon  from '../../images/pokemon.png'



function NavbarComponent() {

    const name = 'Pikachu';
    const activeLink = ({ isActive }) => (isActive ? 'active' : 'undefined')

    return (
        <div>
            <Navbar id='container_navbar' expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img src={Pokemon} width={60} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink id='nav_options' className={activeLink} to="/">Home</NavLink>
                            <NavLink id='nav_options' className={activeLink} to="/Pokemons">Pokemons</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent