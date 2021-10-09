import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import Images from './Images';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
 
  return (
        <>
          <div className="the-blur"></div>
            <Navbar className="navbar " sticky="top" collapseOnSelect expand="lg" >
  <Container fluid> 
  <Navbar.Brand href="#home">
      <Link to="/">
      <img className="logo_home" src={Images.partyLogo} alt="Party Logo"/>
      </Link>
      <span className="orange_home2">NARSINGH PARTY</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features" ><h2 className="mt-2 orange_home">NARSINGHJAN PARTY</h2></Nav.Link>
    </Nav>
    <Nav >
        <li className="ml-2 dropdown">
          <a className="dropbtn">Gurudev <b className=" fa fa-angle-down"></b></a>
          <ul className="dropdown-menu">
            <Link to="/aboutAdiShankaracharyaJi">
            <li className="ml-3"><a href="#">Adi Shankaracharya</a></li>
            </Link>
            <Link to="/aboutSwamiNischalanandaSaraswatiJi">
            <li className="ml-3"><a href="#">Swami Nischalananda Saraswati</a></li>
            </Link>
            <Link to="/dikshitShishya">
            <li className="ml-3"><a href="#">Dikshit Shishya</a></li>
            </Link>
            <Link to="/timeline">
            <li className="ml-3"><a href="#">Timeline</a></li>
            </Link>
            <Link to="/gallery">
            <li className="ml-3"><a href="#">Gallery</a></li>
            </Link>
          </ul>
        </li>
        <span className="ml-2 bar"> | </span>
      <Nav.Link href="#deets">
        <Link className="link" to="latestEvents">
        <h6 className="font_nav">LATEST EVENTS </h6>
        </Link>
        </Nav.Link>

      <span className="ml-2 bar">|</span>
      <Nav.Link >
        <Link className="link" to="/members">
      <h6 className="font_nav">MEMBERS </h6>
      </Link>
      </Nav.Link>
      <span className="ml-2 bar">|</span>
        <li className="ml-2 dropdown">
          <a className="dropbtn">RESOURCES <b className=" fa fa-angle-down"></b></a>
          <ul className="dropdown-menu">
            <li className="ml-3"><a href="#">Press Release</a></li>
            <li className="ml-3"><a href="#">Interview & Articles</a></li>
            <li className="ml-3"><a href="#">Speech & Debates</a></li>
            <li className="ml-3"><a href="#">Photo Gallery</a></li>
          </ul>
        </li>
        <span className="ml-2 bar"> | </span>
      <Nav.Link href="#deets"><h6 className="font_nav">NJP LIVE </h6></Nav.Link>
      <Nav.Link href="#deets">
        <Link classame="link" to="/menu">
        <h6 className="font_nav"><span className="ml-2 fa fa-navicon "></span></h6>
        </Link>
        </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}