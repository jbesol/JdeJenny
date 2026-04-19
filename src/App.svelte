<script>
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import CustomOrder from './components/CustomOrder.svelte';
  import Catalog from './components/Catalog.svelte';
  import ProductModal from './components/ProductModal.svelte';
  import LoginModal from './components/LoginModal.svelte';
  import Footer from './components/Footer.svelte';
  import { products, nextId } from './stores/products.js';
  import { isAdmin } from './stores/auth.js';

  let showModal = false;
  let showLogin = false;
  let editingProduct = null;

  function openAdd() { editingProduct = null; showModal = true; }
  function openEdit(product) { editingProduct = product; showModal = true; }
  function closeModal() { showModal = false; editingProduct = null; }

  function handleSave(event) {
    const data = event.detail;
    if (editingProduct) {
      products.update(list => list.map(p => p.id === editingProduct.id ? { ...data, id: p.id } : p));
    } else {
      let newId;
      nextId.update(n => { newId = n; return n + 1; });
      products.update(list => [...list, { ...data, id: newId }]);
    }
    closeModal();
  }

  function handleDelete(id) {
    products.update(list => list.filter(p => p.id !== id));
  }
</script>

<div class="app">
  <Header onAddProduct={openAdd} onLoginRequest={() => showLogin = true} />
  <main>
    <Hero onAddProduct={openAdd} />
    <Catalog products={$products} onEdit={openEdit} onDelete={handleDelete} />
    <CustomOrder />
  </main>
  <Footer />
  {#if showModal && $isAdmin}
    <ProductModal product={editingProduct} on:save={handleSave} on:close={closeModal} />
  {/if}
  {#if showLogin}
    <LoginModal on:close={() => showLogin = false} />
  {/if}
</div>

<style>
  .app { min-height: 100vh; display: flex; flex-direction: column; }
  main { flex: 1; }
</style>
