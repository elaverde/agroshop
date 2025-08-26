// src/pages/Home/Home.jsx
import ASHeader from '../../components/AsHeader/AsHeader';
import AsSlider from '../../components/AsSlider/AsSlider';
import AsOfertas from '../../components/AsOfertas/AsOfertas';
import AsServicios from '../../components/AsServicios/AsServicios';
import AsQuienesSomos from '../../components/AsQuienesSomos/AsQuienesSomos';
import AsContacto from '../../components/AsContacto/AsContacto';
import AsRedes from '../../components/AsRedes/AsRedes';
export default function Home() {
  return (
    <div>
      <ASHeader />

      <AsSlider />
      <AsRedes />
      <section id="inicio" >
        <AsOfertas />
      </section>
      <section id="servicios">
        <AsServicios />
      </section>
      <section id="nosotros">
        <AsQuienesSomos />
      </section>
      <section id="contacto">
        <AsContacto />
      </section>
    </div>
  );
}
