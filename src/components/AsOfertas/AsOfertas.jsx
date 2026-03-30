import React from 'react';
import { motion } from 'framer-motion';
import './AsOfertas.css';

const products = [
  {
    id: 1,
    image: './oferta_polla_campesina.jpg',
    name: 'Polla Campesina',
    age: '16 semanas',
    badge: 'Más Popular',
    badgeColor: '#40916c',
    accentColor: '#52b788',
    description: 'Fuertes, saludables y con excelente genética para una producción sostenible a largo plazo.',
  },
  {
    id: 2,
    image: './oferta_pollo_blanco.webp',
    name: 'Pollo Blanco',
    age: '15 días',
    badge: 'Alta Demanda',
    badgeColor: '#2d6a4f',
    accentColor: '#74c69d',
    description: 'Ideal para engorde rápido y rentable con cuidado y alimentación balanceada.',
  },
  {
    id: 3,
    image: './oferta_polla_roja.jpg',
    name: 'Polla Roja',
    age: '16 semanas',
    badge: 'Alta Producción',
    badgeColor: '#c0392b',
    accentColor: '#e74c3c',
    description: 'Perfectas para huevos de alta producción. Aves resistentes y de gran rendimiento.',
  },
  {
    id: 4,
    image: './oferta_pollito.jpg',
    name: 'Pollito Criollo',
    age: '1 día',
    badge: 'Para Iniciar',
    badgeColor: '#d35400',
    accentColor: '#f4a261',
    description: 'Excelente inversión para iniciar tu proyecto avícola desde cero con asesoría experta.',
  },
];

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14 } },
};
const card = {
  hidden:  { opacity: 0, y: 70, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.72, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function AsOfertas() {
  return (
    <section className="as-ofertas">
      {/* Background decoration */}
      <div className="ofertas-bg-radial" />

      <div className="ofertas-inner">
        {/* Header */}
        <motion.div
          className="ofertas-header"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <span className="section-tag">🐓 Nuestros Productos</span>
          <h2 className="section-heading">
            Aves de <span className="gradient-text">Primera Calidad</span>
          </h2>
          <p className="ofertas-subtitle">
            Criadas con los más altos estándares para garantizar el éxito de tu granja.
            Calidad, salud y genética superior en cada ave.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="ofertas-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {products.map(p => (
            <motion.article
              key={p.id}
              className="product-card"
              variants={card}
              whileHover={{ y: -14, scale: 1.025 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              {/* Image */}
              <div className="card-img-wrap">
                <img src={p.image} alt={p.name} className="card-img" loading="lazy" />
                <div
                  className="card-overlay"
                  style={{ background: `linear-gradient(to top, ${p.accentColor}cc 0%, transparent 60%)` }}
                />
                <span className="card-badge" style={{ background: p.badgeColor }}>
                  {p.badge}
                </span>
                <div className="card-img-shine" />
              </div>

              {/* Body */}
              <div className="card-body">
                <div className="card-age">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {p.age}
                </div>
                <h3 className="card-name">{p.name}</h3>
                <p className="card-desc">{p.description}</p>
                <a
                  className="card-cta"
                  href={`https://wa.me/573134530510?text=Hola!%20Me%20interesa%20comprar%20${encodeURIComponent(p.name)}%20en%20AgroShop`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--cta-color': p.accentColor }}
                >
                  <span>Consultar Precio</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              {/* Glow effect on hover */}
              <div className="card-glow" style={{ '--glow': p.accentColor }} />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="ofertas-bottom-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p>¿Necesitas asesoría para elegir las aves ideales para tu granja?</p>
          <a
            href="https://wa.me/573134530510?text=Hola!%20Necesito%20asesor%C3%ADa%20para%20elegir%20aves%20en%20AgroShop"
            className="cta-outline-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hablar con un experto
          </a>
        </motion.div>
      </div>
    </section>
  );
}
