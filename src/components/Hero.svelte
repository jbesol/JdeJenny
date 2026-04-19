<script>
  export let onAddProduct;
</script>

<section class="hero" id="inicio">
  <div class="hero-content">
    <p class="hero-eyebrow">✨ Colección exclusiva</p>
    <h1 class="hero-title">
      Elegancia y estilo<br/>
      <span class="highlight">para cada momento</span>
    </h1>
    <p class="hero-subtitle">
      Descubre nuestra colección exclusiva de diademas, vinchas y lazos diseñados
      especialmente para eventos únicos y uso diario. Cada pieza está
      cuidadosamente elaborada para realzar tu belleza natural.
    </p>
    <div class="hero-actions">
      <a href="#catalogo" class="btn-primary">Ver Colección</a>
      <a href="https://wa.me/573014476025" target="_blank" rel="noopener" class="btn-secondary">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Contactar
      </a>
    </div>
  </div>

  <div class="hero-visual">
    <div class="card-stack">
      <div class="stack-card back"></div>
      <div class="stack-card mid"></div>
      <div class="stack-card front">
        <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80" alt="Accesorio destacado" />
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    background: var(--gradient-hero);
    min-height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;
    padding: 5rem 2rem 4rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .hero-eyebrow {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--purple);
    margin-bottom: 1rem;
    animation: fadeUp 0.7s ease both;
  }

  .hero-title {
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 800;
    color: var(--text-dark);
    margin-bottom: 1.25rem;
    animation: fadeUp 0.7s 0.1s ease both;
  }

  .highlight {
    color: var(--purple);
  }

  .hero-subtitle {
    font-size: 0.95rem;
    color: var(--text-mid);
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 480px;
    animation: fadeUp 0.7s 0.2s ease both;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    animation: fadeUp 0.7s 0.3s ease both;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    background: var(--gradient);
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    padding: 0.8rem 2rem;
    border-radius: var(--radius-pill);
    box-shadow: 0 4px 18px rgba(123,47,190,0.35);
    transition: var(--transition);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(123,47,190,0.4);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    color: var(--purple-dark);
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    padding: 0.8rem 1.75rem;
    border-radius: var(--radius-pill);
    border: 2px solid var(--border);
    transition: var(--transition);
  }

  .btn-secondary:hover {
    border-color: var(--purple-light);
    background: var(--lavender);
    transform: translateY(-2px);
  }

  /* Card stack visual */
  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeUp 0.7s 0.2s ease both;
  }

  .card-stack {
    position: relative;
    width: 320px;
    height: 240px;
  }

  .stack-card {
    position: absolute;
    border-radius: var(--radius-lg);
    width: 300px;
    height: 220px;
  }

  .back {
    background: var(--lavender-mid);
    top: -12px; left: 20px;
    transform: rotate(6deg);
  }

  .mid {
    background: var(--pink-light);
    opacity: 0.5;
    top: -6px; left: 10px;
    transform: rotate(3deg);
  }

  .front {
    background: white;
    top: 0; left: 0;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(123,47,190,0.2);
    border: 3px solid white;
  }

  .front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 3rem 1rem;
      text-align: center;
    }
    .hero-actions { justify-content: center; }
    .hero-subtitle { margin: 0 auto 2rem; }
    .hero-visual { display: none; }
  }
</style>
