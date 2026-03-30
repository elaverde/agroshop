import React from 'react';
import { motion } from 'framer-motion';
import './AsHero.css';

/* Deterministic particles — no Math.random() to avoid re-render flicker */
const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 6 + (i * 11 % 22),
  x:   (i * 43 + 7)  % 98,
  y:   (i * 61 + 13) % 94,
  dur: 8 + (i * 1.7  % 9),
  del: (i * 0.55)    % 6,
  rev: i % 2 === 0,
}));

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1] } },
};

export default function AsHero() {
  return (
    <section className="hero">
      {/* ── Background layers ── */}
      <div className="hero-bg" style={{ backgroundImage: 'url(./slider1.jpg)' }} />
      <div className="hero-overlay-gradient" />

      {/* ── Animated blobs ── */}
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />
      <div className="hero-blob blob-3" />

      {/* ── Floating particles ── */}
      <div className="hero-particles" aria-hidden="true">
        {particles.map(p => (
          <span
            key={p.id}
            className={`hero-particle ${p.rev ? 'rev' : ''}`}
            style={{
              width:               p.size,
              height:              p.size,
              left:                `${p.x}%`,
              top:                 `${p.y}%`,
              animationDuration:   `${p.dur}s`,
              animationDelay:      `${p.del}s`,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <motion.div
        className="hero-content"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div className="hero-badge" variants={fadeUp}>
          <span className="badge-pulse" />
          Granja Lagunitas &nbsp;·&nbsp; Vereda Tierra Negra
        </motion.div>

        {/* Title */}
        <motion.h1 className="hero-title" variants={fadeUp}>
          Del Campo<br />
          <span className="hero-title-accent">A Tu Granja</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="hero-subtitle" variants={fadeUp}>
          Aves de alta genética, pollos blancos y criollos con los más altos
          estándares de calidad. Tu aliado estratégico en el campo colombiano.
        </motion.p>

        {/* Actions */}
        <motion.div className="hero-actions" variants={fadeUp}>
          <motion.a
            href="#inicio"
            className="btn-primary-hero"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(64,145,108,0.55)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Ver Productos</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
          <motion.a
            href="#contacto"
            className="btn-secondary-hero"
            whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.18)' }}
            whileTap={{ scale: 0.97 }}
          >
            Contáctanos
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div className="hero-stats" variants={fadeUp}>
          {[
            { n: '14,720+', l: 'Aves Disponibles'    },
            { n: '100%',    l: 'Calidad Garantizada' },
            { n: '15+',     l: 'Años de Experiencia' },
          ].map((s, i) => (
            <React.Fragment key={s.l}>
              {i > 0 && <div className="stats-sep" />}
              <div className="stats-item">
                <span className="stats-num">{s.n}</span>
                <span className="stats-lbl">{s.l}</span>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="hero-scroll-hint"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <span>Scroll</span>
      </motion.div>

      {/* ── Curved bottom divider ── */}
      <div className="hero-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 C360,0 1080,80 1440,20 L1440,80 L0,80 Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
}
