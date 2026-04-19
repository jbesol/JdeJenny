import { writable, derived } from 'svelte/store';

const ADMINS = [
  { username: import.meta.env.VITE_ADMIN1_USER, password: import.meta.env.VITE_ADMIN1_PASS },
  { username: import.meta.env.VITE_ADMIN2_USER, password: import.meta.env.VITE_ADMIN2_PASS },
].filter(u => u.username && u.password);

function createAuth() {
  const stored = (() => { try { return localStorage.getItem('jdejenny_admin'); } catch { return null; } })();
  const { subscribe, set } = writable(stored);

  return {
    subscribe,
    /** @param {string} username @param {string} password */
    login(username, password) {
      const found = ADMINS.find(u => u.username === username && u.password === password);
      if (!found) return false;
      try { localStorage.setItem('jdejenny_admin', username); } catch {}
      set(username);
      return true;
    },
    logout() {
      try { localStorage.removeItem('jdejenny_admin'); } catch {}
      set(null);
    },
  };
}

export const auth = createAuth();
export const isAdmin = derived(auth, $auth => $auth !== null);
