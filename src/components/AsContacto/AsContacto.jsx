import React, { useState } from "react";
import "./AsContacto.css";

const AsContacto = () => {
    return (
        <div className="as-contacto-container">
            <h2 className="as-contacto-title">Contacto</h2>
            <div className="as-contacto-info">
                <div>
                    <strong>Ubicación:</strong>  Vereda Tierra Negra, Granja Lagunitas                </div>
                <div>
                    <strong>Responsable:</strong> Yon Fredy Laverde Molina
                </div>
                <div>
                    <strong>Teléfono:</strong> +57 313 453 0510
                </div>
            </div>
            <div className="as-contacto-maps">
               <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.19906914505!2d-74.3435858!3d4.3737665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f05bd86bda57f%3A0x3355cef44564cf55!2sAgroshop!5e0!3m2!1ses!2sco!4v1756062155773!5m2!1ses!2sco" 
               width="100%" 
               height="450" 
               style="border:0;" 
               allowfullscreen=""
                loading="lazy"
                 referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="as-contacto-mensaje">
                <p>¡Estamos aquí para ayudarte! Contáctanos por teléfono o visítanos en nuestra ubicación.</p>
            </div>
        </div>
    );
};

export default AsContacto;
