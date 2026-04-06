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

// Función para eliminar un producto
const eliminarProducto = (producto) => {
  const indice = listaDeCompras.indexOf(producto);

  if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    console.log(`${producto} eliminado de la lista.`);
  } else {
    console.log(`${producto} no se encontró en la lista.`);
  }
};

// Función para mostrar la lista de compras
const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
  } else {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto}`);
    });
  }
};

// Ejemplo de uso
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Huevos");
agregarProducto("Pan"); // Duplicado

mostrarLista();

eliminarProducto("Pan");
mostrarLista();
