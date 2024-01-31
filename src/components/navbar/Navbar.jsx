
import  { useState } from 'react';


import Navbar from 'react-bootstrap/Navbar';
import { HiMenuAlt4 } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri';

import './navbar.css';

import { Container, Nav } from 'react-bootstrap';
import Brand from '../brand/Brand';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <>
    
    <div className={`full-page-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}  >
      <div className="menu-content">
        <ul>
        <Nav.Link  to="/work" onClick={scrollToTop} className='li'  href="#link">WORKS</Nav.Link>
        <Nav.Link  to="/capabilities" onClick={scrollToTop} className='li' href="#link">CAPABILITIES</Nav.Link>
        <Nav.Link  to="/about" onClick={scrollToTop} className='li' href="#link">ABOUT</Nav.Link>
        <Nav.Link  to="/contact" onClick={scrollToTop} className='li' href="#link">CONTACT</Nav.Link>
        
      
        </ul>
      </div>
    </div>

    <Navbar expand="lg" className="navbar fixed-top">
      <Container>
        <div className="logo my-3">
          <Brand className='logo' />
        </div>
        
        <div className={`toggler-icon ${menuOpen ? 'd-none' : ''}`} onClick={toggleMenu}>
           <HiMenuAlt4 /> 
        </div>

        <div className={`toggler-icon-close ${menuOpen ? '' : 'd-none'}`} onClick={toggleMenu}>
          <RiCloseFill /> 
        </div>
      </Container>
    </Navbar>
    
    </>
  );
};

export default NavBar;






