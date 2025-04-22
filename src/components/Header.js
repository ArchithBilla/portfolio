import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/eBliz_logo.png" alt="eBliz Solutions" />
          </Link>
        </div>
        
        {/* Hamburger menu button - visible only on mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navigation - visible on desktop, hidden on mobile unless menu is open */}
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMenuOpen(false)}>Careers</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;