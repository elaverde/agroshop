import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import './AsServicios.css';

const stats = [
  {
    id: 1,
    icon: './icon_pollo_rojo.svg',
    end: 2000,
    label: 'Aves Rojas',
    desc: 'Pollas de alto rendimiento en producción de huevos',
    ringColor: '#e74c3c',
  },
  {
    id: 2,
    icon: './icon_pollo_blanco.svg',
    end: 2720,
    label: 'Aves Blancas',
    desc: 'Pollos de engorde con genética de elite',
    ringColor: '#74c69d',
  },
  {
    id: 3,
    icon: './icon_pollo_campesino.svg',
    end: 10000,
    label: 'Aves Criollas',
    desc: 'Criollas con la mejor genética colombiana',
    ringColor: '#f4a261',
  },
];

const highlights = [
  { icon: '🌿', text: 'Alimentación 100% Natural' },
  { icon: '💊', text: 'Salud y Bioseguridad' },
  { icon: '🧬', text: 'Genética Superior' },
  { icon: '🤝', text: 'Asesoría Experta' },
];

export default function AsServicios() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView) setStarted(true);
  }, [inView]);

  return (
    <section className="as-servicios" ref={ref}>
      {/* Background layers */}
      <div className="servicios-dots" />
      <div className="servicios-blob-top" />
      <div className="servicios-blob-bot" />

      <div className="servicios-inner">
        {/* Header */}
        <motion.div
          className="servicios-header"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.88)' }}>
            📊 Nuestra Capacidad
          </span>
          <h2 className="section-heading" style={{ color: 'white' }}>
            Impulsa tu Granja con lo<br />
            <span style={{ color: 'var(--gold)', WebkitTextFillColor: 'var(--gold)' }}>
              Mejor de AgroShop
            </span>
          </h2>
          <p className="servicios-desc">
            Productos de alta calidad y servicios especializados para potenciar tu granja.
            Nuestro equipo de expertos está siempre listo para brindarte asesoría personalizada.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="servicios-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {highlights.map(h => (
            <div key={h.text} className="highlight-pill">
              <span>{h.icon}</span>
              <span>{h.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Stat cards */}
        <div className="servicios-stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.id}
              className="stat-card"
              initial={{ opacity: 0, y: 60, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.72, delay: i * 0.16 }}
              whileHover={{ y: -10, scale: 1.04 }}
            >
              {/* Icon */}
              <div className="stat-icon-shell" style={{ '--ring': s.ringColor }}>
                <img src={s.icon} alt={s.label} />
                <span className="stat-ring" />
              </div>

              {/* Number */}
              <div className="stat-num-row">
                {started
                  ? <CountUp className="stat-num" start={0} end={s.end} duration={2.6} separator="," suffix="+" />
                  : <span className="stat-num">0+</span>
                }
              </div>

              <h3 className="stat-label">{s.label}</h3>
              <p className="stat-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
