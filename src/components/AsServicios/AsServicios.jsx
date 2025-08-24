import React, { useState, useEffect } from 'react';
import './AsServicios.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AsServicios = () => {
  // Hook de visibilidad
  const { ref, inView } = useInView({
    triggerOnce: true, // se activa solo la primera vez
    threshold: 0.3,    // porcentaje visible para disparar animación
  });

  // Estado para activar los contadores solo cuando estén visibles
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (inView) {
      setStart(true);
    }
  }, [inView]);

  return (
    <div className="as-servicios-container" ref={ref}>
      <h2 className="as-servicios-title">Impulsa tu granja con lo mejor de AgroShop</h2>
      <h3 className="as-servicios-subtitle"><b>Nuestro compromiso con el</b> Agro</h3>
      <img className="as-servicios-image" src="./pollo.png" alt="Descripción de la imagen" />

      <p className="as-servicios-description">
        En <strong>AgroShop</strong> ofrecemos productos de alta calidad y servicios especializados para potenciar tu granja. 
        Nuestro equipo de expertos está siempre listo para brindarte asesoría personalizada, ayudándote a tomar las mejores decisiones 
        y a maximizar el rendimiento de tu negocio.
      </p>

      <div className='as-servicio-count-productos'>
        <div className='as-servicio-item'>
          <div className='as-servicio-icono'>
            <img src="./icon_pollo_rojo.svg" alt="Ícono de producto" />
          </div>
          {start && <CountUp className='as-servicio-contador' end={2000} duration={3} />}
          <p className='as-servicio-texto'>Aves Rojas</p>
        </div>

        <div className='as-servicio-item'>
          <div className='as-servicio-icono'>
            <img src="./icon_pollo_blanco.svg" alt="Ícono de producto" />
          </div>
          {start && <CountUp className='as-servicio-contador' end={2720} duration={3} />}
          <p className='as-servicio-texto'>Aves Blancas</p>
        </div>

        <div className='as-servicio-item'>
          <div className='as-servicio-icono'>
            <img src="./icon_pollo_campesino.svg" alt="Ícono de producto" />
          </div>
          {start && <CountUp className='as-servicio-contador' end={10000} duration={3} />}
          <p className='as-servicio-texto'>Aves Criollas</p>
        </div>
      </div>
    </div>
  );
};

export default AsServicios;
