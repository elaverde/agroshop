import React from 'react';
import { motion } from 'framer-motion';
import './AsQuienesSomos.css';
import { IconMision, IconVision, IconValores } from '../AsIcons/AsIcons';

const features = [
  'Asesoría Experta Personalizada',
  'Genética de Alta Calidad',
  'Entrega Directa en tu Granja',
  'Soporte Post-Venta Garantizado',
];

const cards = [
  {
    Icon: IconMision,
    title: 'Misión',
    color: '#2a9d8f',
    text: 'Proveer productos y servicios agropecuarios de la más alta calidad, garantizando confianza, asesoría especializada y un acompañamiento cercano para el éxito de nuestros clientes.',
  },
  {
    Icon: IconVision,
    title: 'Visión',
    color: '#f0b240',
    text: 'Ser líderes en soluciones agropecuarias integrales en la región, transformando el campo con innovación, sostenibilidad y compromiso con las comunidades rurales.',
  },
  {
    Icon: IconValores,
    title: 'Valores',
    color: '#f4a261',
    values: [
      { bold: 'Compromiso:', rest: ' Crecemos junto a nuestros clientes.' },
      { bold: 'Confianza:', rest: ' Productos de calidad, respaldo garantizado.' },
      { bold: 'Sostenibilidad:', rest: ' Cuidamos del campo y del medio ambiente.' },
      { bold: 'Innovación:', rest: ' Siempre un paso adelante en soluciones agrícolas.' },
    ],
  },
];

export default function AsQuienesSomos() {
  return (
    <section className="as-quienes">
      <div className="quienes-inner">

        {/* ── Top split row ── */}
        <div className="quienes-intro">
          {/* Text */}
          <motion.div
            className="quienes-text"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.80, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="section-tag">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 22C12 22 4 16 4 9a8 8 0 1116 0c0 7-8 13-8 13z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Quiénes Somos
            </span>
            <h2 className="section-heading">
              Tu Aliado<br />
              <span className="gradient-text">Estratégico en el Campo</span>
            </h2>
            <p className="quienes-desc">
              En <strong>AgroShop</strong> somos más que una tienda agrícola: somos aliados
              estratégicos de quienes trabajan la tierra y crían con pasión. Llevamos
              soluciones innovadoras y confiables que impulsan el crecimiento de tu granja.
            </p>

            <div className="quienes-features">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  className="feature-pill"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Logo showcase */}
          <motion.div
            className="quienes-logo-side"
            initial={{ opacity: 0, x: 60, scale: 0.88 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.80, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="logo-showcase">
              <div className="logo-blob" />
              <div className="logo-blob logo-blob-2" />
              <img src="./logo_2.svg" alt="AgroShop Logo" className="logo-main" />
            </div>
          </motion.div>
        </div>

        {/* ── Cards row ── */}
        <div className="quienes-cards">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="quienes-card"
              style={{ '--card-accent': c.color }}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.72, delay: i * 0.14, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -10 }}
            >
              <div className="card-accent-bar" />

              {/* SVG icon */}
              <div className="card-icon-wrap">
                <c.Icon size={32} className="card-svg-icon" />
              </div>

              <h3 className="card-title">{c.title}</h3>
              {c.text && <p className="card-text">{c.text}</p>}
              {c.values && (
                <ul className="card-values">
                  {c.values.map(v => (
                    <li key={v.bold}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span><strong>{v.bold}</strong>{v.rest}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
