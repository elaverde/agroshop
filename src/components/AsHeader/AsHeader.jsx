// src/components/ASHeader/ASHeader.jsx
import React, { useState, useEffect } from 'react';
import './AsHeader.css';
import logo from '../../assets/images/logo.svg';

export default function AsHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Inicio', 'Servicios', 'Nosotros', 'Contacto'];

  return (
    <header className={`as-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

    

      <nav className={`menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
        {/* Botón toggle para móviles */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>
    </header>
  );
}
