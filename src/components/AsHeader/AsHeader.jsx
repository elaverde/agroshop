import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AsHeader.css';
import logo from '../../assets/images/logo.svg';
import AsBtnMovil from '../AsBtnMovil/AsBtnMovil';
import {
  IconBird,
  IconChart,
  IconApp,
  IconProcess,
  IconPeople,
  IconPin,
} from '../AsIcons/AsIcons';

const menuItems = [
  { label: 'Productos',  href: '#inicio',    Icon: IconBird    },
  { label: 'Servicios',  href: '#servicios', Icon: IconChart   },
  { label: 'Avisoft',    href: '#avisoft',   Icon: IconApp     },
  { label: 'Proceso',    href: '#proceso',   Icon: IconProcess },
  { label: 'Nosotros',   href: '#nosotros',  Icon: IconPeople  },
  { label: 'Contacto',   href: '#contacto',  Icon: IconPin     },
];

export default function AsHeader() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('');
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        ref={menuRef}
        className={`as-header ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="header-inner">
          {/* Logo */}
          <motion.div className="header-logo" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>
            <a href="#">
              <img src={logo} alt="AgroShop" />
            </a>
          </motion.div>

          {/* Desktop nav */}
          <nav className="header-nav">
            <ul>
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 * i + 0.4, duration: 0.5 }}
                >
                  <a
                    href={item.href}
                    className={active === item.label ? 'active' : ''}
                    onClick={() => setActive(item.label)}
                  >
                  {/* <item.Icon size={14} className="nav-icon" /> */}
                    {item.label}
                    <span className="nav-underline" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <motion.a
            href="https://wa.me/573134530510?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20AgroShop"
            className="header-cta"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(244,162,97,0.45)' }}
            whileTap={{ scale: 0.96 }}
          >
            Pedir Ahora
          </motion.a>

          {/* Mobile toggle */}
          <AsBtnMovil isOpen={menuOpen} onToggle={setMenuOpen} />
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 34 }}
            >
              <ul>
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => { setMenuOpen(false); setActive(item.label); }}
                    >
                      <span className="drawer-icon">
                        <item.Icon size={18} />
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/573134530510?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20AgroShop"
                className="drawer-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Pedir Ahora
              </motion.a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
