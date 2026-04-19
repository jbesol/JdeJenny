<script>
  const WHATSAPP_NUMBER = '573014476025';

  let name = '';
  let description = '';
  let reference = '';

  function sendOrder() {
    if (!name.trim() || !description.trim()) return;
    const lines = [
      `Hola, me gustaría encargar un pedido personalizado 🎀`,
      `*Nombre:* ${name.trim()}`,
      `*Descripción:* ${description.trim()}`,
    ];
    if (reference.trim()) lines.push(`*Referencia:* ${reference.trim()}`);
    const msg = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  }

  $: valid = name.trim() && description.trim();
</script>

<section class="custom-order" id="pedido-personalizado">
  <div class="container">
    <div class="inner">
      <div class="text-side">
        <span class="label-tag">Pedido personalizado</span>
        <h3>¿No encontraste lo que buscas?</h3>
        <p>Cuéntanos qué tienes en mente y lo hacemos a tu medida.</p>
      </div>

      <div class="form-side">
        <div class="fields">
          <input
            type="text"
            bind:value={name}
            placeholder="Tu nombre *"
          />
          <textarea
            bind:value={description}
            rows="3"
            placeholder="Describe el accesorio que deseas *"
          ></textarea>
          <input
            type="text"
            bind:value={reference}
            placeholder="Referencia o inspiración (opcional)"
          />
        </div>

        <button class="btn-send" on:click={sendOrder} disabled={!valid}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Enviar por WhatsApp
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .custom-order {
    padding: 4rem 1.5rem;
    background: var(--off-white);
    border-top: 1px solid var(--border);
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .inner {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 3rem;
    align-items: start;
  }

  .label-tag {
    display: inline-block;
    background: var(--lavender);
    color: var(--purple);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    padding: 0.25rem 0.8rem;
    border-radius: var(--radius-pill);
    margin-bottom: 0.85rem;
  }

  .text-side h3 {
    font-size: 1.35rem;
    color: var(--text-dark);
    margin-bottom: 0.6rem;
    line-height: 1.3;
  }

  .text-side p {
    font-size: 0.85rem;
    color: var(--text-mid);
    line-height: 1.7;
  }

  .form-side {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .fields {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  input, textarea {
    background: white;
    border: 1.5px solid var(--border);
    border-radius: var(--radius);
    padding: 0.65rem 0.9rem;
    font-size: 0.85rem;
    color: var(--text-dark);
    transition: var(--transition);
    width: 100%;
    font-family: 'Poppins', sans-serif;
  }

  input::placeholder, textarea::placeholder {
    color: var(--text-light);
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--purple-light);
    box-shadow: 0 0 0 3px rgba(123,47,190,0.08);
  }

  textarea { resize: vertical; min-height: 80px; }

  .btn-send {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    align-self: flex-start;
    background: #25D366;
    color: white;
    font-size: 0.82rem;
    font-weight: 600;
    padding: 0.7rem 1.4rem;
    border-radius: var(--radius-pill);
    box-shadow: 0 3px 10px rgba(37,211,102,0.2);
    transition: var(--transition);
  }

  .btn-send:hover:not(:disabled) {
    background: #1ebe5a;
    transform: translateY(-1px);
    box-shadow: 0 5px 14px rgba(37,211,102,0.3);
  }

  .btn-send:disabled { opacity: 0.4; cursor: not-allowed; }

  @media (max-width: 680px) {
    .inner {
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }

    .btn-send {
      align-self: stretch;
      justify-content: center;
    }
  }
</style>
