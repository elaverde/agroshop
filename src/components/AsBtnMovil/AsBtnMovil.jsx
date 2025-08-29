// src/components/AsBtnMovil/AsBtnMovil.jsx
import React, { useRef, useEffect } from 'react';
import "./AsBtnMovil.css";

const AsBtnMovil = ({ isOpen, className = "", onToggle, ...props }) => {
  const inputRef = useRef(null);

  // Sincroniza el estado del checkbox con la prop isOpen
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = isOpen;
    }
  }, [isOpen]);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggle) {
      onToggle(!isOpen);
    }
  };

  return (
    <div className={`menu-toggle ${className}`} {...props}>
      <label className="burger" htmlFor="burger" onClick={handleClick}>
        <input 
          type="checkbox" 
          id="burger" 
          ref={inputRef}
          onChange={() => {}} // Empty handler to prevent React warnings
        />
        <span />
        <span />
        <span />
      </label>
    </div>
  );
};

export default AsBtnMovil;