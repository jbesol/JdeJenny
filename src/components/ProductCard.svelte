<script>
  import { isAdmin } from '../stores/auth.js';

  export let product;
  export let onEdit;
  export let onDelete;

  const WHATSAPP_NUMBER = '573014476025';

  function orderViaWhatsapp() {
    const msg = encodeURIComponent(`Hola, me gustaría encargar un pedido 🛍️\n*Producto:* ${product.name}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  }

  let confirmDelete = false;
</script>

<article class="card">
  {#if product.featured}
    <div class="badge">Destacado ✨</div>
  {/if}

  <div class="card-image">
    <img src={product.image} alt={product.name} loading="lazy" />
  </div>

  <div class="card-body">
    <span class="card-category">{product.category}</span>
    <h3 class="card-name">{product.name}</h3>
    <p class="card-desc">{product.description}</p>

    <button class="btn-whatsapp" on:click={orderViaWhatsapp}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      Pedir por WhatsApp
    </button>

    {#if $isAdmin}
      <div class="card-actions">
        <button class="btn-icon edit" on:click={() => onEdit(product)}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Editar
        </button>

        {#if confirmDelete}
          <div class="delete-confirm">
            <span>¿Eliminar?</span>
            <button class="btn-yes" on:click={() => onDelete(product.id)}>Sí</button>
            <button class="btn-no" on:click={() => confirmDelete = false}>No</button>
          </div>
        {:else}
          <button class="btn-icon delete" on:click={() => confirmDelete = true}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
            </svg>
            Eliminar
          </button>
        {/if}
      </div>
    {/if}
  </div>
</article>

<style>
  .card {
    background: white;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-card);
    border: 1px solid var(--border);
    transition: var(--transition);
    position: relative;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-purple);
    border-color: var(--lavender-mid);
  }

  .badge {
    position: absolute;
    top: 10px; left: 10px;
    z-index: 2;
    background: var(--gradient);
    color: white;
    font-size: 0.65rem;
    font-weight: 600;
    padding: 0.25rem 0.7rem;
    border-radius: var(--radius-pill);
  }

  .card-image {
    aspect-ratio: 4/3;
    overflow: hidden;
  }

  .card-image img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .card:hover .card-image img {
    transform: scale(1.05);
  }

  .card-body {
    padding: 1.1rem 1.25rem 1.25rem;
  }

  .card-category {
    display: inline-block;
    background: var(--lavender);
    color: var(--purple);
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 0.2rem 0.65rem;
    border-radius: var(--radius-pill);
    margin-bottom: 0.5rem;
  }

  .card-name {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.4rem;
  }

  .card-desc {
    font-size: 0.8rem;
    color: var(--text-mid);
    line-height: 1.6;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .btn-whatsapp {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    background: #25D366;
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.65rem;
    border-radius: var(--radius-pill);
    margin-bottom: 0.85rem;
    transition: var(--transition);
    box-shadow: 0 3px 10px rgba(37,211,102,0.25);
  }

  .btn-whatsapp:hover {
    background: #1ebe5a;
    transform: translateY(-1px);
    box-shadow: 0 5px 14px rgba(37,211,102,0.35);
  }

  .card-actions {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding-top: 0.75rem;
    border-top: 1px solid var(--border);
  }

  .btn-icon {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.72rem;
    font-weight: 500;
    padding: 0.35rem 0.85rem;
    border-radius: var(--radius-pill);
    transition: var(--transition);
  }

  .btn-icon.edit {
    background: var(--lavender);
    color: var(--purple);
  }

  .btn-icon.edit:hover {
    background: var(--lavender-mid);
  }

  .btn-icon.delete {
    background: #FEE7F0;
    color: #C2185B;
  }

  .btn-icon.delete:hover {
    background: #FDD0E3;
  }

  .delete-confirm {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    color: var(--text-mid);
  }

  .btn-yes {
    background: #C2185B;
    color: white;
    font-size: 0.68rem;
    font-weight: 600;
    padding: 0.25rem 0.65rem;
    border-radius: var(--radius-pill);
  }

  .btn-no {
    background: var(--lavender);
    color: var(--purple);
    font-size: 0.68rem;
    font-weight: 600;
    padding: 0.25rem 0.65rem;
    border-radius: var(--radius-pill);
  }
</style>
