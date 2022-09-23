import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Navbar.Brand href="/">Desafio Flimed</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink exact className="nav-link" to="/" >Home</NavLink>
          <NavLink exact className="nav-link" to="/tarefas" >Notas</NavLink>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;