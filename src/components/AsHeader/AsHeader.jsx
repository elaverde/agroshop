// src/components/ASHeader/ASHeader.jsx
import React, { useState, useEffect, useRef } from 'react';
import './AsHeader.css';
import logo from '../../assets/images/logo.svg';
import AsBtnMovil from '../AsBtnMovil/AsBtnMovil';

export default function AsHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Cerrar menú al hacer clic fuera de él
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = ['Inicio', 'Servicios', 'Nosotros', 'Contacto'];

  return (
    <header className={`as-header ${scrolled ? 'scrolled' : ''}`} ref={menuRef}>
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
      <AsBtnMovil 
        isOpen={menuOpen}
        onToggle={setMenuOpen}
        className="menu-toggle"
      />
    </header>
  );
}