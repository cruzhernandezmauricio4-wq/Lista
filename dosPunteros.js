const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
  let inicio = 0;
  let siguiente = 1;

  while (siguiente < arr.length) {
    // Obtener la primera letra de cada nombre
    const inicialInicio = arr[inicio][0];
    const inicialSiguiente = arr[siguiente][0];

    // Comparar iniciales
    if (inicialInicio === inicialSiguiente) {
      return [arr[inicio], arr[siguiente]];
    }

    // Avanzar los punteros
    inicio++;
    siguiente++;
  }

  // Si no se encuentra ningún par
  return null;
}

console.log(encontrarPareja(invitados));
// Resultado esperado: ["Carlos", "Cecilia"]