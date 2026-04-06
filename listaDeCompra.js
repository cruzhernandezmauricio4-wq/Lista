// Arreglo vacío para la lista de compras
let listaDeCompras = [];

// Función para agregar un producto (sin duplicados)
const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`${producto} agregado a la lista.`);
  } else {
    console.log(`${producto} ya está en la lista.`);
  }
};
