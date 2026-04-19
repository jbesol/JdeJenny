import { writable } from 'svelte/store';

/** @template T @param {string} key @param {T} initial */
function localStore(key, initial) {
  try {
    const saved = localStorage.getItem(key);
    if (saved) initial = JSON.parse(saved);
  } catch {}
  const store = writable(initial);
  store.subscribe(value => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  });
  return store;
}

const initialProducts = [
  {
    id: 1,
    name: 'Lazos Tricolor Grosgrain',
    category: 'ganchos',
    description: 'Set de 2 lazos de cinta grosgrain en rojo, amarillo y azul. Con colas largas, ideales para niñas.',
    image: '/prod1.jpeg',
    featured: false,
  },
  {
    id: 2,
    name: 'Gancho Floral Romántico',
    category: 'ganchos',
    description: 'Gancho artesanal con rosas de tela enrolladas, perlas y cristales. Tonos lila, rosa y blanco.',
    image: '/prod2.jpeg',
    featured: true,
  },
  {
    id: 3,
    name: 'Set Lazos con Perlas',
    category: 'ganchos',
    description: 'Trio de lazos grosgrain en lila, rosa palo y nude, cada uno con perlas en el centro.',
    image: '/prod3.jpeg',
    featured: false,
  },
  {
    id: 4,
    name: 'Lazos Satén Oversize',
    category: 'ganchos',
    description: 'Lazos grandes de satén brillante en plateado y lila. Modernos, voluminosos y muy elegantes.',
    image: '/prod4.jpeg',
    featured: false,
  },
  {
    id: 5,
    name: 'Diadema Rosas Nude',
    category: 'diademas',
    description: 'Diadema artesanal con rosas de tela en tonos durazno y crema, perlas y cristales ámbar.',
    image: '/prod5.jpeg',
    featured: true,
  },
  {
    id: 6,
    name: 'Corona Floral Azul Celeste',
    category: 'diademas',
    description: 'Corona de rosas en azul cielo y lila con cintas de satén. Perfecta para primera comunión o niñas.',
    image: '/prod6.jpeg',
    featured: false,
  },
  {
    id: 7,
    name: 'Set Moños Minnie Mouse',
    category: 'ganchos',
    description: 'Par de moños rojos grosgrain con aplique de Minnie en arcilla. Tiernos y llamativos para las niñas.',
    image: '/prod7.jpeg',
    featured: false,
  },
  {
    id: 8,
    name: 'Diadema Candy Fantasía',
    category: 'diademas',
    description: 'Diadema temática con donut, paletas, pompón fucsia y lazo lila. Única y llena de color.',
    image: '/prod8.jpeg',
    featured: false,
  },
];

export const products = localStore('jdejenny_products', initialProducts);
export const nextId = localStore('jdejenny_nextid', 9);

export const categories = [
  { value: 'todos', label: 'Todos' },
  { value: 'diademas', label: 'Diademas' },
  { value: 'ganchos', label: 'Ganchos' },
  { value: 'pinzas', label: 'Pinzas' },
  { value: 'cepillos', label: 'Cepillos' },
  { value: 'turbantes', label: 'Turbantes' },
  { value: 'otros', label: 'Otros' },
];
