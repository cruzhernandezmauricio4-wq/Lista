function findLongestWord(texto) {
  // Dividir el texto en palabras
  const palabras = texto.split(' ');

  let longWord = ''; // Inicializar la palabra más larga

  // Recorrer el arreglo de palabras
  for (let i = 0; i < palabras.length; i++) {
    // Comparar la longitud de la palabra actual con la más larga
    if (palabras[i].length > longWord.length) {
      longWord = palabras[i];
    }
  }

  // Retornar la palabra más larga encontrada
  return longWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text));
// Resultado esperado: "programación"
``