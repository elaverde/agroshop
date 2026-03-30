import React from 'react';
import { motion } from 'framer-motion';
import './AsContacto.css';

const info = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Ubicación',
    value: 'Vereda Tierra Negra, Granja Lagunitas',
    color: '#52b788',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    label: 'Responsable',
    value: 'Yon Fredy Laverde Molina',
    color: '#74c69d',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.0 .18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
      </svg>
    ),
    label: 'Teléfono',
    value: '+57 313 453 0510',
    href: 'tel:+573134530510',
    color: '#f4a261',
  },
];

export default function AsContacto() {
  return (
    <section className="as-contacto">
      {/* BG layers */}
      <div className="contacto-dots" />
      <div className="contacto-blob-1" />
      <div className="contacto-blob-2" />

      <div className="contacto-inner">
        {/* Header */}
        <motion.div
          className="contacto-header"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.15)' }}>
            📍 Encuéntranos
          </span>
          <h2 className="section-heading" style={{ color: 'white' }}>
            Visítanos o<br />
            <span style={{ color: 'var(--gold)', WebkitTextFillColor: 'var(--gold)' }}>Contáctanos</span>
          </h2>
          <p className="contacto-subtitle">
            Estamos aquí para ayudarte. Escríbenos por WhatsApp, llámanos
            o visítanos en la Granja Lagunitas.
          </p>
        </motion.div>

        {/* Body */}
        <div className="contacto-body">
          {/* Left: info + WA */}
          <motion.div
            className="contacto-info-col"
            initial={{ opacity: 0, x: -56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.80 }}
          >
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                className="info-card"
                style={{ '--ic': item.color }}
                initial={{ opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.60 }}
                whileHover={{ x: 8 }}
              >
                <div className="info-icon">{item.icon}</div>
                <div>
                  <span className="info-label">{item.label}</span>
                  {item.href
                    ? <a href={item.href} className="info-value info-link">{item.value}</a>
                    : <p className="info-value">{item.value}</p>
                  }
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/573134530510?text=Hola!%20Me%20interesa%20conocer%20los%20productos%20de%20AgroShop"
              className="wa-cta"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.04, boxShadow: '0 20px 56px rgba(37,211,102,0.42)' }}
              whileTap={{ scale: 0.97 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="wa-icon">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Escríbenos por WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Right: map */}
          <motion.div
            className="contacto-map-col"
            initial={{ opacity: 0, x: 56, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.80, delay: 0.18 }}
          >
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.19906914505!2d-74.3435858!3d4.3737665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f05bd86bda57f%3A0x3355cef44564cf55!2sAgroshop!5e0!3m2!1ses!2sco!4v1756062155773!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación AgroShop"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
