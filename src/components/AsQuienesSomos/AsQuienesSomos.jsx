import React from 'react';
import './AsQuienesSomos.css';

const AsQuienesSomos = () => {
  return (
    <div className="as-quienes-somos-container">
      <h2 className="as-quienes-somos-title">¿Quiénes Somos?</h2>
      <p className="as-quienes-somos-description">
        En <strong>AgroShop</strong> somos más que una tienda agrícola: 
        somos aliados estratégicos de quienes trabajan la tierra y crían con pasión. 
        Nuestro compromiso es llevar soluciones innovadoras y confiables que impulsen el crecimiento de tu granja, 
        optimizando recursos y mejorando la productividad.
      </p>
    
      <div className='as-quienes-somos-logo'>
        <img src="./logo_2.svg" alt="AgroShop Logo" />
      </div>
      <div className="as-quienes-somos-blocks">
        <div className="as-quienes-somos-item">
          <h3>Misión</h3>
          <p>
            Proveer productos y servicios agropecuarios de la más alta calidad, 
            garantizando confianza, asesoría especializada y un acompañamiento cercano 
            para el éxito de nuestros clientes.
          </p>
        </div>

        <div className="as-quienes-somos-item">
          <h3>Visión</h3>
          <p>
            Ser líderes en soluciones agropecuarias integrales en la región, 
            transformando el campo con innovación, sostenibilidad y compromiso con las comunidades rurales.
          </p>
        </div>
        
        <div className="as-quienes-somos-item">
          <h3>Valores</h3>
          <ul>
            <li><b>Compromiso:</b> Crecemos junto a nuestros clientes.</li>
            <li><b>Confianza:</b> Productos de calidad, respaldo garantizado.</li>
            <li><b>Sostenibilidad:</b> Cuidamos del campo y del medio ambiente.</li>
            <li><b>Innovación:</b> Siempre un paso adelante en soluciones agrícolas.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AsQuienesSomos;
