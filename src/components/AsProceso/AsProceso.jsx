import React from 'react';
import { motion } from 'framer-motion';
import './AsProceso.css';
import { IconChoose, IconChat, IconConfirm, IconTruck } from '../AsIcons/AsIcons';

const steps = [
  {
    num: '01',
    title: 'Elige tus Aves',
    desc: 'Selecciona entre nuestras variedades: criollas, rojas o blancas. Todas criadas con genética de alta calidad.',
    Icon: '/elije.svg',
    color: '#fa991a',
  },
  {
    num: '02',
    title: 'Contáctanos',
    desc: 'Escríbenos por WhatsApp o llama directamente. Te brindamos asesoría personalizada sin ningún costo.',
    Icon: '/contacto.svg',
    color: '#13e687',
  },
  {
    num: '03',
    title: 'Confirma tu Pedido',
    desc: 'Acordamos cantidad, precio y fecha. Proceso 100% transparente y sin sorpresas. Tu confianza es nuestra prioridad.',
    Icon: '/confirma.svg',
    color: '#573237',
  },
  {
    num: '04',
    title: 'Entrega en tu Granja',
    desc: 'Recibe aves sanas y fuertes directamente en tu granja con seguimiento experto y garantía de calidad.',
    Icon: '/entrega.svg',
    color: '#f4a261',
  },
];

const lineVariants = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.6 } },
};

export default function AsProceso() {
  return (
    <section className="as-proceso">
      <div className="proceso-bg-left" />
      <div className="proceso-bg-right" />

      <div className="proceso-inner">
        {/* Header */}
        <motion.div
          className="proceso-header"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <span className="section-tag proceso-tag">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
            </svg>
            Así Trabajamos
          </span>
          <h2 className="section-heading">
            Proceso <span className="gradient-text">Simple y Confiable</span>
          </h2>
          <p className="proceso-subtitle">
            En 4 sencillos pasos, aves de calidad premium llegan directamente a tu granja.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Steps */}
        <div className="proceso-steps">
          <motion.div
            className="proceso-connector-line"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="paso"
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.68, delay: i * 0.13, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                className="paso-bubble"
                style={{ '--paso-color': s.color }}
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                <img src={s.Icon} alt={s.title} className="paso-svg" style={{ width: 96, height: 96 }} />
                <span className="paso-ring" />
              </motion.div>
              <div className="paso-num">{s.num}</div>
              <h3 className="paso-title">{s.title}</h3>
              <p className="paso-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="proceso-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, delay: 0.4 }}
        >
          <span>¿Listo para comenzar?</span>
          <motion.a
            href="#inicio"
            className="proceso-cta-btn"
            whileHover={{ scale: 1.05, boxShadow: '0 16px 48px rgba(64,145,108,0.40)' }}
            whileTap={{ scale: 0.97 }}
          >
            Ver Productos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

