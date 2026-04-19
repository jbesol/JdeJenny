<script>
  const WHATSAPP = '573014476025';
</script>

<footer class="footer" id="contacto">
  <!-- Sobre nosotros -->
  <section class="about" id="nosotros">
    <div class="about-inner">
      <div class="section-heading">
        <h2>Sobre J de Jenny</h2>
        <p>Somos un emprendimiento familiar dedicado a crear accesorios únicos para el cabello. Nuestra pasión es ayudar a cada mujer a expresar su belleza y personalidad a través de piezas cuidadosamente diseñadas.</p>
      </div>

      <div class="values">
        <div class="value-card">
          <div class="value-icon">💜</div>
          <h4>Hecho con Amor</h4>
          <p>Cada pieza es elaborada artesanalmente con dedicación y pasión por el detalle.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">✨</div>
          <h4>Diseños Únicos</h4>
          <p>Creaciones exclusivas que reflejan tu personalidad y estilo individual.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">👑</div>
          <h4>Calidad Premium</h4>
          <p>Utilizamos solo los mejores materiales para garantizar durabilidad y elegancia.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Ubicación -->
  <div class="location-banner">
    <div class="location-inner">
      <span class="loc-icon">📍</span>
      <div>
        <strong>Ubicación</strong>
        <p>Barranquilla, Colombia — Realizamos envíos a todo el país.</p>
      </div>
      <a href="https://wa.me/{WHATSAPP}" target="_blank" rel="noopener" class="btn-wa">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Escríbenos
      </a>
    </div>
  </div>

  <!-- Footer bottom -->
  <div class="footer-bottom">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="f-name">J de Jenny</span>
        <span class="f-sub">Accesorios únicos para el cabello que realzan tu belleza natural en cada ocasión especial.</span>
      </div>
      <div class="footer-links">
        <p class="col-title">Navegación</p>
        <a href="#inicio">Inicio</a>
        <a href="#catalogo">Productos</a>
        <a href="#nosotros">Sobre Nosotros</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div class="footer-links">
        <p class="col-title">Categorías</p>
        <span>Diademas</span>
        <span>Vinchas</span>
        <span>Lazos</span>
        <span>Accesorios Nupciales</span>
      </div>
    </div>
    <div class="footer-copy">
      <p>© {new Date().getFullYear()} J de Jenny. Todos los derechos reservados.</p>
      <p>Hecho con 💜 en Barranquilla</p>
    </div>
  </div>
</footer>

<style>
  .about {
    background: var(--lavender);
    padding: 5rem 2rem;
  }

  .about-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-heading {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-heading h2 {
    font-size: 2rem;
    color: var(--text-dark);
    margin-bottom: 0.75rem;
  }

  .section-heading p {
    font-size: 0.9rem;
    color: var(--text-mid);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
  }

  .values {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .value-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: var(--shadow-card);
    border: 1px solid var(--border);
    transition: var(--transition);
  }

  .value-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-purple);
  }

  .value-icon { font-size: 2rem; margin-bottom: 0.75rem; }

  .value-card h4 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
  }

  .value-card p {
    font-size: 0.82rem;
    color: var(--text-mid);
    line-height: 1.7;
  }

  /* Location banner */
  .location-banner {
    background: var(--gradient);
    padding: 2.5rem 2rem;
  }

  .location-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .loc-icon { font-size: 2rem; flex-shrink: 0; }

  .location-inner div { flex: 1; }

  .location-inner strong {
    display: block;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.2rem;
  }

  .location-inner p {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.85);
  }

  .btn-wa {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    color: var(--purple-dark);
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-pill);
    white-space: nowrap;
    transition: var(--transition);
  }

  .btn-wa:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  }

  /* Footer bottom */
  .footer-bottom {
    background: #2D1B4E;
    padding: 3rem 2rem 1.5rem;
  }

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 1.5rem;
  }

  .f-name {
    display: block;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    margin-bottom: 0.5rem;
  }

  .f-sub {
    display: block;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.55);
    line-height: 1.7;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .col-title {
    font-family: 'Nunito', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
  }

  .footer-links a,
  .footer-links span {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.55);
    text-decoration: none;
    transition: var(--transition);
    cursor: default;
  }

  .footer-links a:hover { color: var(--pink-light); }

  .footer-copy {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: rgba(255,255,255,0.35);
  }

  @media (max-width: 768px) {
    .values { grid-template-columns: 1fr; }
    .footer-inner { grid-template-columns: 1fr; gap: 1.5rem; }
    .footer-copy { flex-direction: column; gap: 0.25rem; text-align: center; }
    .location-inner { flex-direction: column; text-align: center; }
  }
</style>
