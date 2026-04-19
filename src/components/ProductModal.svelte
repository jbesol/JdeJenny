<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { categories } from '../stores/products.js';

  export let product = null;
  const dispatch = createEventDispatcher();

  let form = { name: '', category: 'otros', description: '', image: '', featured: false };
  /** @type {HTMLInputElement} */
  let fileInput;

  onMount(() => { if (product) form = { .../** @type {any} */(product) }; });

  function submit() {
    if (!form.name.trim() || !form.description.trim()) return;
    dispatch('save', form);
  }

  function close() { dispatch('close'); }

  /** @param {Event} e */
  function handleFileChange(e) {
    const input = /** @type {HTMLInputElement} */ (e.currentTarget);
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { form.image = /** @type {string} */ (ev.target?.result ?? ''); };
    reader.readAsDataURL(file);
  }

  function removeImage() {
    form.image = '';
    if (fileInput) fileInput.value = '';
  }

  const catOptions = categories.filter(c => c.value !== 'todos');
</script>

<div class="backdrop" on:click|self={close} on:keydown|self={(e) => e.key === 'Escape' && close()} role="dialog" aria-modal="true" tabindex="-1">
  <div class="modal">
    <div class="modal-header">
      <h2>{product ? 'Editar producto' : 'Nuevo producto'}</h2>
      <button class="btn-close" aria-label="Cerrar" on:click={close}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <div class="modal-body">
      <div class="field">
        <label for="name">Nombre del producto <span>*</span></label>
        <input id="name" type="text" bind:value={form.name} placeholder="Ej: Diadema Floral Dorada" />
      </div>

      <div class="field">
        <label for="category">Categoría</label>
        <select id="category" bind:value={form.category}>
          {#each catOptions as cat}
            <option value={cat.value}>{cat.label}</option>
          {/each}
        </select>
      </div>

      <div class="field">
        <label for="description">Descripción <span>*</span></label>
        <textarea id="description" bind:value={form.description} rows="3" placeholder="Describe el producto..."></textarea>
      </div>

      <div class="field">
        <label for="image">Imagen del producto</label>
        <label class="file-upload-label" for="image">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          {form.image ? 'Cambiar imagen' : 'Seleccionar archivo'}
        </label>
        <input id="image" type="file" accept="image/*" bind:this={fileInput} on:change={handleFileChange} class="file-input-hidden" />
        {#if form.image}
          <div class="img-preview">
            <img src={form.image} alt="Preview" />
            <button type="button" class="btn-remove-img" aria-label="Quitar imagen" on:click={removeImage}>✕</button>
          </div>
        {/if}
      </div>

      <label class="check-label">
        <input type="checkbox" bind:checked={form.featured} />
        <span class="check-box"></span>
        Marcar como producto destacado ✨
      </label>
    </div>

    <div class="modal-footer">
      <button class="btn-cancel" on:click={close}>Cancelar</button>
      <button class="btn-save" on:click={submit} disabled={!form.name.trim() || !form.description.trim()}>
        {product ? 'Guardar cambios' : 'Agregar producto'}
      </button>
    </div>
  </div>
</div>

<style>
  .backdrop {
    position: fixed; inset: 0;
    background: rgba(45,27,78,0.5);
    backdrop-filter: blur(6px);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .modal {
    background: white;
    border-radius: var(--radius-lg);
    width: 100%;
    max-width: 480px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(45,27,78,0.3);
    animation: slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1);
  }

  @keyframes slideUp {
    from { opacity:0; transform: translateY(30px) scale(0.97); }
    to { opacity:1; transform: translateY(0) scale(1); }
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.75rem 1rem;
    border-bottom: 1px solid var(--border);
  }

  .modal-header h2 { font-size: 1.3rem; color: var(--text-dark); }

  .btn-close {
    background: var(--lavender);
    color: var(--purple);
    width: 34px; height: 34px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }

  .btn-close:hover { background: var(--lavender-mid); }

  .modal-body {
    padding: 1.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  .field { display: flex; flex-direction: column; gap: 0.4rem; }

  label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: var(--text-mid);
  }

  label span { color: var(--pink); }

  input, textarea, select {
    background: var(--lavender);
    border: 1.5px solid var(--border);
    border-radius: var(--radius);
    padding: 0.65rem 0.9rem;
    font-size: 0.88rem;
    color: var(--text-dark);
    transition: var(--transition);
    width: 100%;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--purple-light);
    background: white;
    box-shadow: 0 0 0 3px rgba(123,47,190,0.1);
  }

  textarea { resize: vertical; min-height: 80px; }

  .img-preview {
    margin-top: 0.5rem;
    border-radius: var(--radius);
    overflow: hidden;
    height: 130px;
    border: 1.5px solid var(--border);
  }

  .img-preview img { width: 100%; height: 100%; object-fit: cover; }

  .check-label {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0;
    color: var(--text-dark);
  }

  .check-label input[type="checkbox"] { display: none; }

  .check-box {
    width: 20px; height: 20px;
    border: 2px solid var(--purple-light);
    border-radius: 6px;
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    transition: var(--transition);
    background: white;
  }

  .check-label input:checked + .check-box {
    background: var(--gradient);
    border-color: transparent;
  }

  .check-label input:checked + .check-box::after {
    content: '';
    width: 5px; height: 9px;
    border: 2px solid white;
    border-top: none; border-left: none;
    transform: rotate(45deg) translateY(-1px);
    display: block;
  }

  .modal-footer {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
    padding: 1rem 1.75rem 1.5rem;
    border-top: 1px solid var(--border);
  }

  .btn-cancel {
    background: var(--lavender);
    color: var(--purple);
    font-size: 0.82rem;
    font-weight: 600;
    padding: 0.7rem 1.25rem;
    border-radius: var(--radius-pill);
  }

  .btn-cancel:hover { background: var(--lavender-mid); }

  .btn-save {
    background: var(--gradient);
    color: white;
    font-size: 0.82rem;
    font-weight: 600;
    padding: 0.7rem 1.5rem;
    border-radius: var(--radius-pill);
    box-shadow: 0 4px 14px rgba(123,47,190,0.3);
  }

  .btn-save:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(123,47,190,0.4);
  }

  .btn-save:disabled { opacity: 0.4; cursor: not-allowed; }

  .file-input-hidden { display: none; }

  .file-upload-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--lavender);
    border: 1.5px dashed var(--purple-light);
    border-radius: var(--radius);
    padding: 0.65rem 0.9rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--purple);
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: 0;
  }

  .file-upload-label:hover {
    background: var(--lavender-mid);
    border-color: var(--purple);
  }

  .img-preview { position: relative; }

  .btn-remove-img {
    position: absolute;
    top: 6px; right: 6px;
    background: rgba(45,27,78,0.7);
    color: white;
    font-size: 0.7rem;
    width: 22px; height: 22px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    border: none;
    line-height: 1;
  }

  .btn-remove-img:hover { background: rgba(45,27,78,0.9); }
</style>
