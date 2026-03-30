import React from 'react';
import { motion } from 'framer-motion';
import './AsAvisoft.css';
import { IconScale, IconGrain, IconEgg, IconUniformity, IconShield, IconSliders } from '../AsIcons/AsIcons';

const features = [
  {
    Icon: IconScale,
    title: 'Control de Peso',
    desc: 'Registra y analiza el peso de tus aves con cálculos automáticos de ganancia diaria.',
    color: '#52b788',
  },
  {
    Icon: IconGrain,
    title: 'Consumo de Alimento',
    desc: 'Calcula consumo por ave, por lote y costo por bulto según tu configuración.',
    color: '#74c69d',
  },
  {
    Icon: IconEgg,
    title: 'Producción de Huevo',
    desc: 'Monitorea la producción diaria y obtén indicadores de rendimiento por semana.',
    color: '#f4a261',
  },
  {
    Icon: IconUniformity,
    title: 'Uniformidad del Lote',
    desc: 'Evalúa la homogeneidad del lote para tomar decisiones técnicas acertadas.',
    color: '#95d5b2',
  },
  {
    Icon: IconShield,
    title: '100% Privado',
    desc: 'Sin registro, sin cuenta, sin datos en la nube. Todo queda en tu dispositivo.',
    color: '#40916c',
  },
  {
    Icon: IconSliders,
    title: 'Fácil Configuración',
    desc: 'Ajusta precio por bulto, gramaje y tema visual según tus necesidades.',
    color: '#d8f3dc',
  },
];

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10 } },
};
const item = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4,0,0.2,1] } },
};

export default function AsAvisoft() {
  return (
    <section className="as-avisoft">
      {/* BG layers */}
      <div className="avisoft-dots" />
      <div className="avisoft-blob-1" />
      <div className="avisoft-blob-2" />

      <div className="avisoft-inner">

        {/* ── Header ── */}
        <motion.div
          className="avisoft-header"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <span className="section-tag avisoft-tag">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
            App Exclusiva para Clientes
          </span>
          <div className="avisoft-title-row">
            <img src="./avisoft_logo.png" alt="Avisoft logo" className="avisoft-logo-big" />
            <h2 className="section-heading" style={{ color: 'white', marginBottom: 0 }}>
              Conoce <span className="avisoft-accent">Avisoft</span>
            </h2>
          </div>
          <p className="avisoft-subtitle">
            La herramienta técnica que entregamos a nuestros clientes para apoyar
            la gestión diaria de su producción avícola. Gratis, sin registro
            y completamente privada.
          </p>
        </motion.div>

        {/* ── Body ── */}
        <div className="avisoft-body">

          {/* Left: phone mockup */}
          <motion.div
            className="avisoft-mockup-col"
            initial={{ opacity: 0, x: -60, scale: 0.90 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.4,0,0.2,1] }}
          >
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                {/* Simulated app UI */}
                <div className="app-topbar">
                  <div className="app-logo-row">
                    <img src="./avisoft_logo.png" alt="Avisoft" className="app-logo-img" />
                    <span className="app-logo-text">Avisoft</span>
                  </div>
                  <span className="app-topbar-dot" />
                </div>
                <div className="app-cards">
                  {[
                    { label: 'Peso Prom.',   val: '1.82 kg',  color: '#52b788' },
                    { label: 'Consumo/día',  val: '112 g',    color: '#74c69d' },
                    { label: 'Producción',   val: '94.3%',    color: '#f4a261' },
                    { label: 'Uniformidad', val: '87.1%',    color: '#95d5b2' },
                  ].map(c => (
                    <div key={c.label} className="app-card" style={{ '--ac': c.color }}>
                      <span className="app-card-val">{c.val}</span>
                      <span className="app-card-lbl">{c.label}</span>
                    </div>
                  ))}
                </div>
                <div className="app-bar-chart">
                  {[65, 82, 78, 91, 88, 94].map((h, i) => (
                    <motion.div
                      key={i}
                      className="app-bar"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.09 + 0.5, duration: 0.5, ease: 'easeOut' }}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="app-bottom-nav">
                  {['⚖️','🌾','🥚','⚙️'].map((ic, i) => (
                    <span key={i} className={`app-nav-icon ${i === 0 ? 'active' : ''}`}>{ic}</span>
                  ))}
                </div>
              </div>
              {/* Glow under phone */}
              <div className="phone-glow" />
            </div>
          </motion.div>

          {/* Right: features grid */}
          <div className="avisoft-features-col">
            <motion.div
              className="avisoft-features-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {features.map(f => (
                <motion.div
                  key={f.title}
                  className="avisoft-feat"
                  variants={item}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <span className="feat-icon" style={{ '--fi': f.color }}>
                    <f.Icon size={22} />
                  </span>
                  <div>
                    <h4 className="feat-title">{f.title}</h4>
                    <p className="feat-desc">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Privacy badge */}
            <motion.div
              className="privacy-badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="privacy-icon">
                <IconShield size={28} />
              </div>
              <div>
                <p className="privacy-title">Sin registro · Sin cuenta · Sin nube</p>
                <p className="privacy-text">
                  Avisoft no solicita datos personales ni información financiera.
                  Todo lo que configures queda únicamente en tu dispositivo.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="avisoft-ctas"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=elaverde.avisoft2&hl=es_CO"
                className="gplay-btn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 56px rgba(0,0,0,0.45)' }}
                whileTap={{ scale: 0.97 }}
              >
                <img src="./avisoft_logo.png" alt="Avisoft" className="gplay-icon" style={{ borderRadius: '8px', objectFit: 'contain' }} />
                <div>
                  <span className="gplay-sub">Disponible en</span>
                  <span className="gplay-main">Google Play</span>
                </div>
              </motion.a>

              <motion.a
                href={`https://wa.me/573134530510?text=${encodeURIComponent('Hola! Me interesa conocer la app Avisoft de AgroShop.')}`}
                className="avisoft-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Pedir info por WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
