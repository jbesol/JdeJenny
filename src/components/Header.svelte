<script>
  import { isAdmin, auth } from '../stores/auth.js';

  export let onAddProduct;
  export let onLoginRequest;
</script>

<header class="header">
  <div class="header-inner">
    <div class="brand">
      <img src="/jdejenny.png" alt="J de Jenny" class="brand-logo" />
    </div>

    <nav class="nav">
      <a href="#inicio" class="nav-link">Inicio</a>
      <a href="#catalogo" class="nav-link">Productos</a>
      <a href="#nosotros" class="nav-link">Sobre Nosotros</a>
      <a href="#contacto" class="nav-link">Contacto</a>
    </nav>

    <div class="right-controls">
      {#if $isAdmin}
        <button class="btn-add" on:click={onAddProduct}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          Agregar
        </button>
        <button class="btn-logout" on:click={() => auth.logout()} aria-label="Cerrar sesión">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
          </svg>
        </button>
      {:else}
        <button class="btn-login-small" on:click={onLoginRequest} aria-label="Administrador">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
        </button>
      {/if}
    </div>
  </div>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    box-shadow: 0 2px 12px rgba(123,47,190,0.07);
  }

  .header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .brand {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    flex-shrink: 0;
    cursor: default;
    user-select: none;
  }

  .brand-logo {
    height: 44px;
    width: auto;
    display: block;
  }

  .nav {
    display: flex;
    gap: 0.25rem;
  }

  .nav-link {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-mid);
    text-decoration: none;
    padding: 0.4rem 0.85rem;
    border-radius: var(--radius-pill);
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--purple);
    background: var(--lavender);
  }

  .right-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .btn-add {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--gradient);
    color: white;
    font-size: 0.78rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-pill);
    transition: var(--transition);
    box-shadow: 0 3px 10px rgba(123,47,190,0.25);
  }

  .btn-add:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 14px rgba(123,47,190,0.35);
  }

  .btn-logout {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px; height: 30px;
    border-radius: 50%;
    background: var(--lavender);
    color: var(--text-mid);
    transition: var(--transition);
  }

  .btn-logout:hover { background: var(--lavender-mid); color: var(--purple); }

  .btn-login-small {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px; height: 28px;
    border-radius: 50%;
    background: transparent;
    color: var(--border);
    transition: var(--transition);
  }

  .btn-login-small:hover { color: var(--text-light); }

  @media (max-width: 768px) {
    .nav { display: none; }
    .header-inner { padding: 0 1rem; }
  }
</style>
