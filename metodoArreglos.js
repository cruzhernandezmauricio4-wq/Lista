
// Arreglo de objetos con productos
const productos = [
  { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
  { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
  { nombre: "Libro", precio: 12, categoria: "Educación" },
  { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
  { nombre: "Celular", precio: 600, categoria: "Electrónica" }
];

// 1. Usar filter() para obtener los productos que cuestan menos de $100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:");
console.log(productosBaratos);
// 1.1 Usar filter() para obtener los productos que cuestan menos de $100 con forEach para que solo salgan los nombres 
const productosBaratos2 = productos.filter(producto => producto.precio < 100);

console.log("Productos con precio menor a $100:");

productosBaratos2.forEach(producto => {
  console.log(producto.nombre);
});