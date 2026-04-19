<script>
  import { createEventDispatcher } from 'svelte';
  import { auth } from '../stores/auth.js';

  const dispatch = createEventDispatcher();

  let username = '';
  let password = '';
  let error = false;
  let loading = false;

  function close() { dispatch('close'); }

  async function submit() {
    if (!username.trim() || !password.trim()) return;
    loading = true;
    error = false;
    await new Promise(r => setTimeout(r, 300));
    const ok = auth.login(username.trim(), password);
    loading = false;
    if (ok) {
      close();
    } else {
      error = true;
      password = '';
    }
  }

  function onKeydown(e) { if (e.key === 'Enter') submit(); }
</script>

<div
  class="backdrop"
  on:click|self={close}
  on:keydown|self={(e) => e.key === 'Escape' && close()}
  role="dialog"
  aria-modal="true"
  tabindex="-1"
>
  <div class="modal">
    <div class="modal-header">
      <div class="lock-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0110 0v4"/>
        </svg>
      </div>
      <h2>Acceso administrador</h2>
      <button class="btn-close" aria-label="Cerrar" on:click={close}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <div class="modal-body">
      {#if error}
        <div class="error-msg">Usuario o contraseña incorrectos.</div>
      {/if}

      <div class="field">
        <label for="login-user">Usuario</label>
        <input
          id="login-user"
          type="text"
          bind:value={username}
          placeholder="Tu usuario"
          on:keydown={onKeydown}
          autocomplete="username"
        />
      </div>

      <div class="field">
        <label for="login-pass">Contraseña</label>
        <input
          id="login-pass"
          type="password"
          bind:value={password}
          placeholder="••••••••"
          on:keydown={onKeydown}
          autocomplete="current-password"
        />
      </div>
    </div>

    <div class="modal-footer">
      <button class="btn-cancel" on:click={close}>Cancelar</button>
      <button
        class="btn-login"
        on:click={submit}
        disabled={loading || !username.trim() || !password.trim()}
      >
        {loading ? 'Verificando...' : 'Ingresar'}
      </button>
    </div>
  </div>
</div>

<style>
  .backdrop {
    position: fixed; inset: 0;
    background: rgba(45,27,78,0.5);
    backdrop-filter: blur(6px);
    z-index: 300;
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
    max-width: 380px;
    box-shadow: 0 20px 60px rgba(45,27,78,0.3);
    animation: slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1);
  }

  @keyframes slideUp {
    from { opacity:0; transform: translateY(30px) scale(0.97); }
    to   { opacity:1; transform: translateY(0)   scale(1);    }
  }

  .modal-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.4rem 1.75rem 1rem;
    border-bottom: 1px solid var(--border);
  }

  .lock-icon {
    width: 34px; height: 34px;
    background: var(--lavender);
    color: var(--purple);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .modal-header h2 { font-size: 1.1rem; color: var(--text-dark); flex: 1; }

  .btn-close {
    background: var(--lavender);
    color: var(--purple);
    width: 30px; height: 30px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }

  .btn-close:hover { background: var(--lavender-mid); }

  .modal-body {
    padding: 1.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .error-msg {
    background: #FEE7F0;
    color: #C2185B;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.6rem 0.9rem;
    border-radius: var(--radius);
    border: 1px solid #F8BBD9;
  }

  .field { display: flex; flex-direction: column; gap: 0.4rem; }

  label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: var(--text-mid);
  }

  input {
    background: var(--lavender);
    border: 1.5px solid var(--border);
    border-radius: var(--radius);
    padding: 0.65rem 0.9rem;
    font-size: 0.88rem;
    color: var(--text-dark);
    transition: var(--transition);
    width: 100%;
    font-family: 'Poppins', sans-serif;
  }

  input:focus {
    outline: none;
    border-color: var(--purple-light);
    background: white;
    box-shadow: 0 0 0 3px rgba(123,47,190,0.1);
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
    padding: 0.65rem 1.2rem;
    border-radius: var(--radius-pill);
  }

  .btn-cancel:hover { background: var(--lavender-mid); }

  .btn-login {
    background: var(--gradient);
    color: white;
    font-size: 0.82rem;
    font-weight: 600;
    padding: 0.65rem 1.5rem;
    border-radius: var(--radius-pill);
    box-shadow: 0 4px 14px rgba(123,47,190,0.3);
  }

  .btn-login:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(123,47,190,0.4);
  }

  .btn-login:disabled { opacity: 0.4; cursor: not-allowed; }
</style>
