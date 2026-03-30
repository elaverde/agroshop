/**
 * AsIcons — Biblioteca de SVGs creativos para AgroShop
 * Todos los iconos son originales, diseñados a mano con paths SVG.
 * Uso: <IconBird size={20} className="..." />
 */

/* ─── Base wrapper ─── */
const Icon = ({ size = 24, className = '', children, viewBox = '0 0 24 24' }) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

/* ─── NAVEGACIÓN ─────────────────────────────────────────── */

/** Inicio / Productos — Pollo estilizado de perfil */
export const IconBird = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* cuerpo redondeado */}
    <ellipse cx="13" cy="13" rx="7" ry="6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    {/* ala */}
    <path d="M10 11 C8 9 6 10 6 12 C8 13 10 13 10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* cabeza */}
    <circle cx="19" cy="9" r="3" stroke="currentColor" strokeWidth="1.6"/>
    {/* pico */}
    <path d="M21.5 8.5 L23.5 9 L21.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    {/* ojo */}
    <circle cx="19.8" cy="8.6" r="0.7" fill="currentColor"/>
    {/* pata izq */}
    <path d="M11 19 L10 22 M10 22 L9 23 M10 22 L11 23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    {/* pata der */}
    <path d="M14 19 L13 22 M13 22 L12 23 M13 22 L14 23" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    {/* cresta */}
    <path d="M17.5 6.5 C18 5 19 4 19 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
  </Icon>
);

/** Servicios — Gráfica de barras con hoja */
export const IconChart = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* barras */}
    <rect x="3" y="14" width="4" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="10" y="9" width="4" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    <rect x="17" y="4" width="4" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
    {/* hoja sobre la barra más alta */}
    <path d="M19 4 C19 1 22 1 22 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    <path d="M19 4 L22 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </Icon>
);

/** Avisoft — Smartphone con hoja */
export const IconApp = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* cuerpo del teléfono */}
    <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.6"/>
    {/* pantalla */}
    <rect x="7.5" y="5" width="9" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    {/* botón home */}
    <circle cx="12" cy="19" r="1" stroke="currentColor" strokeWidth="1.3"/>
    {/* hoja dentro de pantalla */}
    <path d="M10 9 C10 7 13 7 13 9 C13 11 10 11 10 9Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M11.5 9 L11.5 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </Icon>
);

/** Proceso — Engranaje con flecha circular */
export const IconProcess = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* círculo exterior con dientes */}
    <path
      d="M12 2 L13.8 4.2 L16.5 3.5 L17.3 6.2 L20 7 L19.3 9.7 L21.5 11.5 L19.3 13.3 L20 16 L17.3 16.8 L16.5 19.5 L13.8 18.8 L12 21 L10.2 18.8 L7.5 19.5 L6.7 16.8 L4 16 L4.7 13.3 L2.5 11.5 L4.7 9.7 L4 7 L6.7 6.2 L7.5 3.5 L10.2 4.2 Z"
      stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"
    />
    {/* círculo interior */}
    <circle cx="12" cy="11.5" r="3" stroke="currentColor" strokeWidth="1.5"/>
    {/* flecha arriba derecha */}
    <path d="M16 4 L18 4 L18 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

/** Nosotros — Dos personas con raíz/campo */
export const IconPeople = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* persona izquierda */}
    <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M2 20 C2 16 5 14 8 14 C9 14 10 14.3 11 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    {/* persona derecha */}
    <circle cx="16" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M22 20 C22 16 19 14 16 14 C15 14 14 14.3 13 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    {/* tierra / raíz */}
    <path d="M8 20 L12 17 L16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M7 22 L17 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M12 17 L12 22" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </Icon>
);

/** Contacto — Pin de mapa con hoja */
export const IconPin = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* cuerpo del pin */}
    <path d="M12 2 C8.1 2 5 5.1 5 9 C5 14.2 12 22 12 22 C12 22 19 14.2 19 9 C19 5.1 15.9 2 12 2Z"
      stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
    {/* hoja dentro del pin */}
    <path d="M12 6 C12 6 10 8 10 10 C10 11.1 10.9 12 12 12 C13.1 12 14 11.1 14 10 C14 8 12 6 12 6Z"
      stroke="currentColor" strokeWidth="1.3" fill="none"/>
    <path d="M12 8.5 L12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </Icon>
);

/* ─── FEATURES AVISOFT ────────────────────────────────────── */

/** Peso / Balanza */
export const IconScale = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* base */}
    <path d="M6 21 L18 21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M12 21 L12 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    {/* viga horizontal */}
    <path d="M4 10 L20 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    {/* plato izquierdo */}
    <path d="M4 10 L2 16 L8 16 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
    {/* plato derecho */}
    <path d="M20 10 L18 16 L22 16 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
    {/* punto superior */}
    <circle cx="12" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
  </Icon>
);

/** Consumo / Trigo */
export const IconGrain = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* tallo */}
    <path d="M12 22 L12 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    {/* espigas izquierda */}
    <path d="M12 18 C10 17 8 15 9 13 C10 11 12 12 12 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    <path d="M12 14 C10 13 8 11 9 9 C10 7 12 8 12 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    {/* espigas derecha */}
    <path d="M12 18 C14 17 16 15 15 13 C14 11 12 12 12 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    <path d="M12 14 C14 13 16 11 15 9 C14 7 12 8 12 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    {/* punta */}
    <path d="M12 6 C11 4 12 2 12 2 C12 2 13 4 12 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
  </Icon>
);

/** Producción / Huevo */
export const IconEgg = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* huevo */}
    <path d="M12 3 C8 3 5 7 5 12 C5 17 8 21 12 21 C16 21 19 17 19 12 C19 7 16 3 12 3Z"
      stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
    {/* brillo superior */}
    <path d="M9 7 C9 6 10 5.5 11 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    {/* línea de eclosión */}
    <path d="M8 14 L10 12 L12 14 L14 12 L16 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </Icon>
);

/** Uniformidad / Campana de Gauss */
export const IconUniformity = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* curva de distribución */}
    <path d="M3 19 C3 19 5 19 7 13 C9 7 10 4 12 4 C14 4 15 7 17 13 C19 19 21 19 21 19"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    {/* línea base */}
    <path d="M2 19 L22 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* línea media */}
    <path d="M12 19 L12 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 2"/>
    {/* puntos sigma */}
    <circle cx="8" cy="15" r="1.2" fill="currentColor"/>
    <circle cx="16" cy="15" r="1.2" fill="currentColor"/>
  </Icon>
);

/** Privacidad / Escudo con candado */
export const IconShield = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* escudo */}
    <path d="M12 2 L4 6 L4 13 C4 17.4 7.6 21.3 12 22 C16.4 21.3 20 17.4 20 13 L20 6 Z"
      stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
    {/* candado cuerpo */}
    <rect x="9" y="12" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    {/* arco del candado */}
    <path d="M10 12 L10 10 C10 8.3 14 8.3 14 10 L14 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    {/* punto keyhole */}
    <circle cx="12" cy="14.5" r="0.8" fill="currentColor"/>
  </Icon>
);

/** Configuración / Sliders */
export const IconSliders = ({ size, className }) => (
  <Icon size={size} className={className}>
    {/* líneas de slider */}
    <path d="M3 6 L21 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M3 12 L21 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M3 18 L21 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    {/* controles */}
    <circle cx="8" cy="6" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="16" cy="12" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="10" cy="18" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.6"/>
  </Icon>
);

/* ─── PROCESO ────────────────────────────────────────────── */

/** Paso 1 — Elige tus Aves — Gallo artístico con cresta y plumas elaboradas */
export const IconChoose = ({ size, className }) => (
  <Icon size={size} className={className} viewBox="0 0 32 32">
    {/* Cola — tres plumas curvadas en capas */}
    <path d="M4.5 18 C2.5 14.5 2 10.5 4 8 C5.5 12 5.5 15 6 18.5"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    <path d="M4.5 18 C3.5 13 5.5 9.5 8.5 7.5 C8 11.5 7 14.5 6 18.5"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    <path d="M6 18.5 C6 12.5 8.5 9 12 7.5 C10.5 11.5 9 15 6 18.5"
      stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.45"/>
    {/* Cuerpo — elipse con relleno suave */}
    <ellipse cx="16" cy="20.5" rx="9" ry="7"
      fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.7"/>
    {/* Ala — dos capas */}
    <path d="M11 18.5 C9 16.5 7 17.5 7 19.5 C8.5 20 11 19.5 11 19.5"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    <path d="M12 17 C11 15.5 12 14 13.5 15.5"
      stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.4"/>
    {/* Cuello */}
    <path d="M21 15 L23 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    {/* Cabeza */}
    <circle cx="25" cy="11" r="4.5"
      fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.7"/>
    {/* Cresta triple elaborada */}
    <path d="M22.5 7 C23 5 24 4.5 24 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    <path d="M24 6.5 C24.5 4.5 25.5 4 25.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    <path d="M25.5 6 C26 4 27 4.5 26.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    {/* Pico */}
    <path d="M28.5 10.5 L31 11 L28.5 11.5" stroke="currentColor" strokeWidth="1.4"
      strokeLinecap="round" strokeLinejoin="round"/>
    {/* Ojo con reflejo */}
    <circle cx="26" cy="10" r="1.3" fill="currentColor"/>
    <circle cx="26.4" cy="9.5" r="0.45" fill="white"/>
    {/* Barbilla / carúncula */}
    <path d="M23 14 C22 15.5 22 17 23.5 17"
      stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    {/* Patas */}
    <path d="M13 27.5 L12 31 M12 31 L10.5 32 M12 31 L13 32 M12 31 L14 32"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M18.5 28 L17.5 31.5 M17.5 31.5 L16 32 M17.5 31.5 L18.5 32"
      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    {/* Estrella de calidad (esquina superior izquierda) */}
    <path d="M5.5 5.5 L6.35 7.75 L8.7 7.75 L6.95 9.1 L7.55 11.35 L5.5 10 L3.45 11.35 L4.05 9.1 L2.3 7.75 L4.65 7.75 Z"
      stroke="currentColor" strokeWidth="1.0" strokeLinejoin="round"
      fill="currentColor" fillOpacity="0.22"/>
  </Icon>
);

/** Paso 2 — Contáctanos — Burbujas de chat con teléfono y señal */
export const IconChat = ({ size, className }) => (
  <Icon size={size} className={className} viewBox="0 0 32 32">
    {/* Burbuja principal */}
    <path d="M3 4 L25 4 C26.1 4 27 4.9 27 6 L27 19 C27 20.1 26.1 21 25 21 L10 21 L5 26 L5 21 L3 21 C1.9 21 1 20.1 1 19 L1 6 C1 4.9 1.9 4 3 4Z"
      fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    {/* Burbuja secundaria pequeña (derecha, superpuesta) */}
    <path d="M23 19 L30 19 C30.6 19 31 19.4 31 20 L31 25 C31 25.6 30.6 26 30 26 L26 26 L24 28 L24 26 C23.4 26 23 25.6 23 25 L23 20 C23 19.4 23.4 19 23 19Z"
      fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity="0.5"/>
    {/* Teléfono dentro de burbuja */}
    <path d="M6.5 8.5 L9 8.5 L10 12 L8.3 13 C8.9 14.8 10.5 16.5 12.3 17 L13.3 15.3 L16.8 16.3 L16.8 18.5 C16.8 19 16.3 19.5 15.8 19.5 C11 19.5 6.5 14.8 6.5 10 C6.5 9.3 6.5 8.5 6.5 8.5Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    {/* Ondas de señal */}
    <path d="M21 9 C22.2 8 23.5 8 23.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    <path d="M22.5 7.5 C24.5 6.5 26.5 7 26.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    <path d="M24 6 C27 5 29 6.5 29 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
  </Icon>
);

/** Paso 3 — Confirma tu Pedido — Documento premium con sello decorativo */
export const IconConfirm = ({ size, className }) => (
  <Icon size={size} className={className} viewBox="0 0 32 32">
    {/* Documento */}
    <path d="M4 2 L21 2 L28 9 L28 30 L4 30 Z"
      fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    {/* Doblez de esquina */}
    <path d="M21 2 L21 9 L28 9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    <path d="M21 2 L28 9" fill="currentColor" fillOpacity="0.10" stroke="none"/>
    {/* Líneas de texto */}
    <line x1="8" y1="15" x2="24" y2="15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.35"/>
    <line x1="8" y1="19" x2="21" y2="19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.35"/>
    <line x1="8" y1="23" x2="17" y2="23" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.35"/>
    {/* Sello circular decorativo */}
    <circle cx="22.5" cy="24.5" r="6.5" fill="currentColor" fillOpacity="0.07"
      stroke="currentColor" strokeWidth="1.5" strokeDasharray="2.5 1.5"/>
    <circle cx="22.5" cy="24.5" r="4.5" stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.6"/>
    {/* Estrella en el sello */}
    <path d="M22.5 21.5 L23.3 23.7 L25.6 23.7 L23.8 25 L24.5 27.2 L22.5 25.9 L20.5 27.2 L21.2 25 L19.4 23.7 L21.7 23.7 Z"
      fill="currentColor" opacity="0.55"/>
    {/* Checkmark principal — elemento dominante */}
    <path d="M7 11.5 L11 15.5 L18 8"
      stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

/** Paso 4 — Entrega en tu Granja — Camión detallado con ruedas y movimiento */
export const IconTruck = ({ size, className }) => (
  <Icon size={size} className={className} viewBox="0 0 32 32">
    {/* ─ Remolque / Caja de carga ─ */}
    <rect x="1" y="7" width="17" height="12" rx="2"
      fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.7"/>
    {/* Franja decorativa inferior del remolque */}
    <rect x="1" y="16.5" width="17" height="2.5" rx="1" fill="currentColor" fillOpacity="0.14"/>
    {/* División interna */}
    <line x1="9.5" y1="7" x2="9.5" y2="19" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1.5" opacity="0.28"/>
    {/* Siluetas de aves dentro del remolque */}
    <ellipse cx="5.5" cy="12.5" rx="2.2" ry="1.8" fill="currentColor" opacity="0.18"/>
    <circle  cx="7.5" cy="10.5" r="1.5" fill="currentColor" opacity="0.18"/>
    <path d="M8.8 10 L10.2 10.3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.25"/>
    <ellipse cx="13.5" cy="12.5" rx="2.2" ry="1.8" fill="currentColor" opacity="0.18"/>
    <circle  cx="15.5" cy="10.5" r="1.5" fill="currentColor" opacity="0.18"/>

    {/* ─ Cabina ─ */}
    <path d="M18 10 L18 19 L30.5 19 L30.5 15 L27 10 Z"
      fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    {/* Parabrisas con reflejo */}
    <path d="M19.5 11.5 L19.5 15.5 L29 15.5 L29 15 L26.5 11.5 Z"
      fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    <line x1="21.5" y1="12.5" x2="20.5" y2="15" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.45"/>
    {/* Puerta */}
    <rect x="19.5" y="16.5" width="5.5" height="2.5" rx="0.8"
      stroke="currentColor" strokeWidth="1.1" fill="none" opacity="0.5"/>
    {/* Manija */}
    <line x1="23" y1="17.7" x2="24.5" y2="17.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    {/* Faro */}
    <rect x="29.2" y="16" width="2" height="2.5" rx="0.9" fill="currentColor" opacity="0.8"/>

    {/* ─ Rueda trasera (detallada) ─ */}
    <circle cx="8" cy="23" r="4" fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="8" cy="23" r="2.2" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.65"/>
    <circle cx="8" cy="23" r="0.7" fill="currentColor"/>
    <line x1="8" y1="19.8" x2="8" y2="21.2" stroke="currentColor" strokeWidth="1.1" opacity="0.45"/>
    <line x1="8" y1="24.8" x2="8" y2="26.2" stroke="currentColor" strokeWidth="1.1" opacity="0.45"/>
    <line x1="4.8" y1="23" x2="6.2" y2="23" stroke="currentColor" strokeWidth="1.1" opacity="0.45"/>
    <line x1="9.8" y1="23" x2="11.2" y2="23" stroke="currentColor" strokeWidth="1.1" opacity="0.45"/>

    {/* ─ Rueda delantera (detallada) ─ */}
    <circle cx="24" cy="23" r="4" fill="currentColor" fillOpacity="0.10" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="24" cy="23" r="2.2" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.65"/>
    <circle cx="24" cy="23" r="0.7" fill="currentColor"/>
    <line x1="24" y1="19.8" x2="24" y2="21.2" stroke="currentColor" strokeWidth="1.1" opacity="0.45"/>
    <line x1="24" y1="24.8" x2="24" y2="26.2" stroke="currentColor" strokeWidth="1.1" opacity="0.45"/>
    <line x1="20.8" y1="23" x2="22.2" y2="23" stroke="currentColor" strokeWidth="1.1" opacity="0.45"/>
    <line x1="25.8" y1="23" x2="27.2" y2="23" stroke="currentColor" strokeWidth="1.1" opacity="0.45"/>

    {/* ─ Líneas de velocidad ─ */}
    <line x1="0" y1="3.5" x2="10" y2="3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" opacity="0.5"/>
    <line x1="0" y1="6" x2="5.5" y2="6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.35"/>
    <line x1="0" y1="8.5" x2="2" y2="8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
  </Icon>
);

/* ─── QUIÉNES SOMOS ─────────────────────────────────────── */

/** Misión — Cohete con estrella y rastro (diseño original) */
export const IconMision = ({ size, className }) => (
  <Icon size={size} className={className} viewBox="0 0 330.14 338.31">
    <path fill="currentColor" d="M278.48,73.53c-6.04,6.04-15.83,6.04-21.87,0s-6.04-15.83,0-21.87c6.04-6.04,15.83-6.04,21.87,0,6.04,6.04,6.04,15.83,0,21.87Z"/>
    <circle fill="currentColor" cx="238.51" cy="91.63" r="15.46"/>
    <path fill="currentColor" d="M151.41,313.74c-1.7,0-3.39-.61-4.73-1.77-2.17-1.9-3-4.91-2.11-7.65,3.71-11.43,11.36-44.78,2.69-59.89-12.35,4.38-42.74,13.96-61.39,9.42-2.61-.64-4.65-2.68-5.29-5.29-4.51-18.55,2.72-52.97,5.63-65.38-14.86-9.14-48.84-1.36-60.4,2.39-2.74.89-5.75.06-7.65-2.11-1.89-2.17-2.31-5.27-1.05-7.86,24.17-49.87,54.41-68.78,75.52-75.86,16.55-5.55,30.25-4.95,37.15-4.05,42.93-53.14,92.42-76.3,126.7-86.39C294.57-1.9,322.18.1,323.34.19c3.53.28,6.33,3.08,6.61,6.61.09,1.16,2.1,28.77-9.11,66.86-10.08,34.28-33.25,83.78-86.39,126.71.91,6.9,1.51,20.59-4.04,37.15-7.08,21.11-25.99,51.35-75.86,75.52-1,.48-2.07.72-3.13.72ZM149.71,228.66c1.87,0,3.71.73,5.09,2.11,14.58,14.58,11.6,43.36,7.72,61.74,69.97-40.8,57.3-92.73,57.16-93.29-.73-2.78.26-5.72,2.52-7.49,52.31-41,74.91-88.71,84.66-121.52,7.51-25.26,8.78-45.85,8.88-55.81-9.96.1-30.54,1.37-55.81,8.88-32.81,9.75-80.52,32.35-121.52,84.66-1.77,2.26-4.72,3.25-7.49,2.52-.11-.03-14.96-3.63-34.55,3.19-22.49,7.83-42.59,26.36-58.73,53.96,18.38-3.88,47.15-6.86,61.73,7.72,1.8,1.8,2.51,4.42,1.88,6.89-2.88,11.1-9.24,41.19-7.45,58.33,16.36,1.25,43.4-7.54,53.3-11.4.85-.33,1.74-.49,2.62-.49Z"/>
    <path fill="currentColor" d="M7.19,338.31c-1.64,0-3.25-.56-4.55-1.63-1.78-1.46-2.76-3.68-2.63-5.98.12-2.13,3.56-52.73,48.91-107.8,2.01-2.44,5.38-3.28,8.31-2.07,2.92,1.21,4.71,4.2,4.4,7.34-.86,8.76-1.77,21.38.3,29.89l1.83,7.52,7.52,1.83h0c8.24,2,21.27,2.55,32.41,1.37,3.01-.32,5.92,1.29,7.24,4.03,1.32,2.74.77,6.01-1.36,8.17-19.75,19.99-56.54,45.48-100.55,57.09-.6.16-1.22.24-1.83.24ZM46.43,250.29c-20.06,29.9-27.66,56.66-30.47,70.77,31.02-10.04,54.74-25.98,69.04-37.43-6.34-.31-12.3-1.07-17.11-2.24l-11.78-2.86c-2.61-.63-4.65-2.68-5.29-5.29l-2.86-11.78c-.84-3.47-1.31-7.26-1.53-11.17Z"/>
    <path fill="currentColor" d="M141.52,195.62l-5.89-1.43-1.43-5.89c-1.11-4.55-1.08-10.11-.55-15.53-22.19,26.95-23.64,51.82-23.64,51.82,23.08-6.09,39.87-20.56,47.72-28.51-5.63.6-11.47.68-16.22-.47Z"/>
  </Icon>
);

/** Visión — Bombilla con rayos de luz (diseño original) */
export const IconVision = ({ size, className }) => (
  <Icon size={size} className={className} viewBox="0 0 332.97 365.86">
    <path fill="currentColor" d="M193.95,294.59h-54.93c-7.15,0-12.95,5.8-12.95,12.95s5.8,12.95,12.95,12.95h54.93c7.15,0,12.95-5.8,12.95-12.95s-5.8-12.95-12.95-12.95Z"/>
    <path fill="currentColor" d="M166.48,55.58c7.15,0,12.95-5.8,12.95-12.95V12.95c0-7.15-5.8-12.95-12.95-12.95s-12.95,5.8-12.95,12.95v29.68c0,7.15,5.8,12.95,12.95,12.95Z"/>
    <path fill="currentColor" d="M320.02,140.79h-29.69c-7.15,0-12.95,5.8-12.95,12.95s5.8,12.95,12.95,12.95h29.69c7.15,0,12.95-5.8,12.95-12.95s-5.8-12.95-12.95-12.95Z"/>
    <path fill="currentColor" d="M280.9,108.7l24.61-16.6c5.93-4,7.49-12.04,3.49-17.97-4-5.93-12.04-7.49-17.97-3.49l-24.61,16.6c-5.93,4-7.49,12.04-3.49,17.97,2.5,3.71,6.58,5.71,10.74,5.71,2.49,0,5.01-.72,7.23-2.22Z"/>
    <path fill="currentColor" d="M222.95,66.13c1.82.88,3.75,1.3,5.64,1.3,4.8,0,9.42-2.69,11.66-7.3l12.96-26.71c3.12-6.43.44-14.18-6-17.3-6.43-3.12-14.18-.44-17.3,6l-12.96,26.71c-3.12,6.43-.44,14.18,6,17.3Z"/>
    <path fill="currentColor" d="M314.11,216.94l-27.91-10.1c-6.72-2.43-14.14,1.05-16.58,7.77-2.43,6.72,1.05,14.15,7.77,16.58l27.91,10.1c1.45.53,2.94.78,4.4.78,5.3,0,10.27-3.28,12.17-8.55,2.43-6.72-1.05-14.15-7.77-16.58Z"/>
    <path fill="currentColor" d="M42.63,166.68c7.15,0,12.95-5.8,12.95-12.95s-5.8-12.95-12.95-12.95H12.95c-7.15,0-12.95,5.8-12.95,12.95s5.8,12.95,12.95,12.95h29.68Z"/>
    <path fill="currentColor" d="M66.55,87.24l-24.61-16.6c-5.93-4-13.98-2.43-17.97,3.49-4,5.93-2.43,13.97,3.49,17.97l24.61,16.6c2.22,1.5,4.74,2.22,7.23,2.22,4.16,0,8.24-2,10.74-5.71,4-5.93,2.43-13.97-3.49-17.97Z"/>
    <path fill="currentColor" d="M92.72,60.13c2.24,4.61,6.85,7.3,11.66,7.3,1.89,0,3.82-.42,5.64-1.3,6.43-3.12,9.12-10.87,6-17.3l-12.96-26.71c-3.12-6.43-10.86-9.12-17.3-6-6.43,3.12-9.12,10.87-6,17.3l12.96,26.71Z"/>
    <path fill="currentColor" d="M46.78,206.84l-27.91,10.1c-6.72,2.43-10.2,9.85-7.77,16.58,1.91,5.27,6.88,8.55,12.17,8.55,1.46,0,2.95-.25,4.4-.78l27.91-10.1c6.72-2.43,10.2-9.85,7.77-16.58-2.43-6.73-9.87-10.2-16.58-7.77Z"/>
    <path fill="currentColor" d="M180.36,339.96h-27.74c-7.15,0-12.95,5.8-12.95,12.95s5.8,12.95,12.95,12.95h27.74c7.15,0,12.95-5.8,12.95-12.95s-5.8-12.95-12.95-12.95Z"/>
    <path fill="currentColor" d="M166.48,76.72c-54.77,0-90.2,31.36-90.35,79.91-1.75,41.02,14.03,62.06,26.72,78.97,8.31,11.07,14.87,19.82,16.69,32.8.91,6.47,6.45,11.15,12.8,11.15.6,0,1.21-.04,1.81-.13,7.08-.99,12.02-7.54,11.02-14.62-2.75-19.59-12.34-32.38-21.62-44.74-11.81-15.75-22.97-30.62-21.55-62.56,0-.19.01-.39.01-.58,0-50.39,49.33-54.31,64.45-54.31s64.46,3.92,64.46,54.31c0,.19,0,.39.01.58,1.43,31.94-9.73,46.81-21.55,62.56-9.28,12.37-18.87,25.15-21.62,44.74-.99,7.08,3.94,13.63,11.02,14.62.61.09,1.21.13,1.81.13,6.35,0,11.9-4.68,12.8-11.15,1.82-12.98,8.38-21.73,16.69-32.8,12.69-16.91,28.47-37.95,26.72-78.97-.14-48.55-35.57-79.91-90.35-79.91Z"/>
  </Icon>
);

/** Valores — Manos y aves juntas (diseño original) */
export const IconValores = ({ size, className }) => (
  <Icon size={size} className={className} viewBox="0 0 395.25 220.52">
    <path fill="currentColor" d="M395.19,161.19c-2.46-23.31-16.7-133.21-17.31-137.88-.37-2.88-1.89-5.48-4.2-7.23-2.32-1.75-5.24-2.49-8.11-2.06l-49.37,7.41c-3.41.51-6.36,2.63-7.96,5.68C285.03,17.49,229.9-2.93,187.69.35c-20.94,1.63-36.28,6.56-47.48,13.24l-62.12,1.82-48.41-7.26c-2.86-.43-5.79.31-8.11,2.06-2.32,1.75-3.83,4.35-4.2,7.23C16.76,22.11,2.51,132.01.06,155.32c-.32,3.04.67,6.08,2.71,8.36,2.05,2.27,4.97,3.57,8.03,3.57h52.46c4.74,0,8.93-3.09,10.32-7.62.41-1.34,1.24-4.05,2.31-7.82,23.63,17.5,72.77,53.55,87.61,61.88,8.65,4.85,17.09,6.82,24.9,6.82,11.4,0,21.44-4.2,28.79-9.74,5.45,1.53,11.15,2.45,17.01,2.45,12.2,0,18.43-5.31,21.51-9.77,2.32-3.35,3.42-7.03,3.82-10.54,16.43-1.45,28.09-12.75,33.91-21.82,9.82-4.15,17.98-11.78,24.24-19.42,1.89,6.92,3.38,11.85,3.99,13.82,1.39,4.53,5.58,7.62,10.32,7.62h52.46c3.06,0,5.98-1.3,8.03-3.57,2.05-2.28,3.03-5.31,2.71-8.36ZM22.91,145.65c3.46-29.03,11.26-89.69,14.47-114.5l32.21,4.83c5.2,19.54-1.82,60.76-10.14,93.84-.3.78-.5,1.59-.61,2.4-1.2,4.69-2.43,9.2-3.64,13.43H22.91ZM250.31,170.71c-1.39-.45-18.58-6.39-43.96-31.77-4.22-4.22-11.06-4.22-15.27,0-4.22,4.22-4.22,11.06,0,15.27,21.58,21.58,38.32,31.02,47.06,34.91.04.83,0,1.54-.15,1.95-.33.16-1.41.56-3.79.56-26.34,0-51.43-28.67-51.68-28.96-3.89-4.51-10.69-5.03-15.22-1.15-4.53,3.89-5.04,10.7-1.16,15.23.72.83,10.56,12.14,25.44,21.95-4.93.63-10.87-.11-17.52-3.84-13.56-7.61-63.28-43.98-92.24-65.53,6.6-27.22,13.96-66.34,9.8-92.7l26.81-.78c-5.83,10.76-7.35,22.01-7.35,30.82,0,33.17,14.51,37.65,28.7,37.65,7.88,0,14-6.27,21.74-14.2,6.59-6.75,16.56-16.96,23.19-16.96,5.48.4,29.79,12.16,59.42,32.39,29.11,19.87,43.77,34.52,48.04,41.29-2.37,1.9-4.86,3.46-7.41,4.5-14.11-2.32-39.05-21.99-52.04-34.44-4.3-4.13-11.14-3.99-15.27.32-4.13,4.3-3.99,11.14.32,15.27,3.26,3.13,26.75,25.25,49.31,35.5-4.18,2.78-9.77,4.56-16.77,2.75ZM306.63,130.12c-22.37-27.99-100.76-78.58-121.8-78.58-15.85,0-28.56,13.02-38.76,23.47-2.63,2.69-6.1,6.25-8,7.68-1.2-.02-2.41-.08-2.8-.27-.03-.02-2.58-2.71-2.58-15.77,0-9.98,0-40.36,56.69-44.77,39.11-3.04,94.03,18.21,113.54,26.43-2.04,22.2,2.58,51.28,7.78,75.04-1.06,1.95-2.44,4.28-4.07,6.77ZM340.05,151.52c-2.45-8.52-4.93-18.14-7.2-28.14-.09-.71-.24-1.41-.47-2.09-6.3-28.31-10.71-59.22-7.34-76.67.15-.52.27-1.05.34-1.57.09-.4.18-.81.28-1.2l32.22-4.83c3.2,24.81,11,85.46,14.47,114.5h-32.29Z"/>
  </Icon>
);

/* ─── FOOTER CONTACTO ───────────────────────────────────── */

export const IconLocation = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M12 2 C8.1 2 5 5.1 5 9 C5 14.2 12 22 12 22 C12 22 19 14.2 19 9 C19 5.1 15.9 2 12 2Z"
      stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
    <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
  </Icon>
);

export const IconPerson = ({ size, className }) => (
  <Icon size={size} className={className}>
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4 20 C4 16.7 7.6 14 12 14 C16.4 14 20 16.7 20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
  </Icon>
);

export const IconPhone = ({ size, className }) => (
  <Icon size={size} className={className}>
    <path d="M5 3 L9 3 L11 8 L8.5 9.5 C9.5 11.6 11.4 13.5 13.5 14.5 L15 12 L20 14 L20 18 C20 19.1 19.1 20 18 20 C9.8 20 3 13.2 3 5 C3 3.9 3.9 3 5 3Z"
      stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
  </Icon>
);
