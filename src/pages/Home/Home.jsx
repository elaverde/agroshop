// src/pages/Home/Home.jsx
import ASHeader    from '../../components/AsHeader/AsHeader';
import AsHero      from '../../components/AsHero/AsHero';
import AsRedes     from '../../components/AsRedes/AsRedes';
import AsOfertas   from '../../components/AsOfertas/AsOfertas';
import AsServicios from '../../components/AsServicios/AsServicios';
import AsAvisoft   from '../../components/AsAvisoft/AsAvisoft';
import AsProceso   from '../../components/AsProceso/AsProceso';
import AsQuienesSomos from '../../components/AsQuienesSomos/AsQuienesSomos';
import AsContacto  from '../../components/AsContacto/AsContacto';
import AsFooter    from '../../components/AsFooter/AsFooter';

export default function Home() {
  return (
    <div>
      <ASHeader />
      <AsHero />
      <AsRedes />

      <section id="inicio">
        <AsOfertas />
      </section>

      <section id="servicios">
        <AsServicios />
      </section>

      <section id="avisoft">
        <AsAvisoft />
      </section>

      <section id="proceso">
        <AsProceso />
      </section>

      <section id="nosotros">
        <AsQuienesSomos />
      </section>

      <section id="contacto">
        <AsContacto />
      </section>

      <AsFooter />
    </div>
  );
}
