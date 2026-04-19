<script>
  import ProductCard from './ProductCard.svelte';
  import { categories } from '../stores/products.js';

  export let products = [];
  export let onEdit;
  export let onDelete;

  let activeCategory = 'todos';
  let searchQuery = '';

  $: filtered = products.filter(p => {
    const matchCat = activeCategory === 'todos' || p.category === activeCategory;
    const matchSearch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });
</script>

<section class="catalog" id="catalogo">
  <div class="catalog-inner">
    <div class="section-heading">
      <h2>Nuestra Colección</h2>
      <p>Cada accesorio está diseñado con amor y atención al detalle, usando materiales de la más alta calidad para garantizar durabilidad y elegancia.</p>
    </div>

    <div class="toolbar">
      <div class="categories">
        {#each categories as cat}
          <button
            class="cat-btn"
            class:active={activeCategory === cat.value}
            on:click={() => activeCategory = cat.value}
          >
            {cat.label}
            <span class="cat-count">
              {cat.value === 'todos' ? products.length : products.filter(p => p.category === cat.value).length}
            </span>
          </button>
        {/each}
      </div>

      <div class="search-wrap">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        <input type="search" placeholder="Buscar producto..." bind:value={searchQuery} />
      </div>
    </div>

    {#if filtered.length === 0}
      <div class="empty">
        <div class="empty-icon">🔍</div>
        <p>No se encontraron productos</p>
        <span>Intenta con otra búsqueda o categoría</span>
      </div>
    {:else}
      <div class="grid">
        {#each filtered as product (product.id)}
          <ProductCard {product} {onEdit} {onDelete} />
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .catalog {
    background: var(--off-white);
    padding: 5rem 2rem;
  }

  .catalog-inner {
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
    max-width: 560px;
    margin: 0 auto;
    line-height: 1.8;
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }

  .categories {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
  }

  .cat-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: white;
    color: var(--text-mid);
    font-size: 0.78rem;
    font-weight: 500;
    padding: 0.45rem 1rem;
    border-radius: var(--radius-pill);
    border: 1.5px solid var(--border);
    transition: var(--transition);
  }

  .cat-btn:hover {
    border-color: var(--purple-light);
    color: var(--purple);
    background: var(--lavender);
  }

  .cat-btn.active {
    background: var(--gradient);
    color: white;
    border-color: transparent;
    box-shadow: 0 3px 10px rgba(123,47,190,0.25);
  }

  .cat-count {
    background: rgba(255,255,255,0.25);
    font-size: 0.65rem;
    padding: 1px 6px;
    border-radius: 10px;
    min-width: 20px;
    text-align: center;
  }

  .cat-btn:not(.active) .cat-count {
    background: var(--lavender);
    color: var(--purple);
  }

  .search-wrap {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-pill);
    padding: 0.5rem 1rem;
    min-width: 220px;
    transition: var(--transition);
  }

  .search-wrap:focus-within {
    border-color: var(--purple-light);
    box-shadow: 0 0 0 3px rgba(123,47,190,0.1);
  }

  .search-wrap svg { color: var(--text-light); flex-shrink: 0; }

  .search-wrap input {
    border: none;
    background: none;
    font-size: 0.85rem;
    color: var(--text-dark);
    width: 100%;
  }

  .search-wrap input:focus { outline: none; }
  .search-wrap input::placeholder { color: var(--text-light); }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .empty {
    text-align: center;
    padding: 5rem 2rem;
    color: var(--text-mid);
  }

  .empty-icon { font-size: 2.5rem; margin-bottom: 1rem; }

  .empty p {
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: var(--text-dark);
  }

  .empty span { font-size: 0.85rem; }

  @media (max-width: 640px) {
    .catalog { padding: 3rem 1rem; }
    .toolbar { flex-direction: column; align-items: flex-start; }
    .search-wrap { width: 100%; }
  }
</style>
