import React from 'react';
import './AsOfertas.css';
const AsOfertas = () => {
    return (
        <div className="asofertas-container">
            <h2 className="asofertas-title"><b>Ofertas</b> Especiales</h2>
            <p className="asofertas-welcome">🌾 ¡Bienvenido a <strong>AgroShop</strong>, tu aliado en el mundo avícola! 🌾</p>
            <p className="asofertas-description">
                Descubre nuestras ofertas exclusivas y aprovecha la oportunidad de llevar a tu granja o emprendimiento avícola aves de la más alta calidad. Contamos con:
            </p>
            <ul className="asofertas-list">
                <li className="asofertas-list-item">
                    <strong>Pollas criollas de 16 semanas:</strong> fuertes, saludables y con excelente genética para una producción sostenible.
                </li>
                <li className="asofertas-list-item">
                    <strong>Pollas rojas de 16 semanas:</strong> perfectas para quienes buscan huevos de alta producción y aves resistentes.
                </li>
                <li className="asofertas-list-item">
                    <strong>Pollos blancos de 15 días:</strong> ideal para engorde rápido y rentable, con cuidado y alimentación balanceada.
                </li>
                <li className="asofertas-list-item">
                    <strong>Aves criollas de un día:</strong> una excelente inversión para iniciar tu proyecto avícola desde cero.
                </li>
            </ul>
            <p className="asofertas-commitment">
                En <strong>AgroShop</strong> nos comprometemos a ofrecer aves sanas, fuertes y con acompañamiento experto para que tu negocio crezca con éxito. 🐓
            </p>
            <p className="asofertas-call">
                ¡No esperes más y garantiza hoy mismo la calidad que tu granja merece! 💚
            </p>
            <div className='asofertas-image-productos'>
                <div className='asofertas-image-container'>
                    <img src="/oferta_polla_campesina.jpg"  />
                    <p className='asoferta_titulo'>Polla Campesina</p>
                </div>
                <div className='asofertas-image-container'>
                    <img src="/oferta_pollo_blanco.webp"  />
                    <p className='asoferta_titulo'>Pollo Blanco</p>
                </div>
                <div className='asofertas-image-container'>
                    <img src="/oferta_polla_roja.jpg"  />
                    <p className='asoferta_titulo'>Polla Roja</p>
                </div>
                <div className='asofertas-image-container'>
                    <img src="/oferta_pollito.jpg"  />
                    <p className='asoferta_titulo'>Pollito</p>
                </div>

            </div>
        </div>
    );
};

export default AsOfertas;