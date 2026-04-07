función  findMax ( arr )  {
    // TODO: Agregar la condición del caso base
    if  ( arr.length === 1)  {
        return  arr[0] ;
    }

    // TODO: Dividir el arreglo en dos mitades
    const  mid  =  /* calcular el punto medio */ ;
    const  left  =  /* obtener la primera mitad */ ;
    const  right  =  /* obtener la segunda mitad */ ;

    // TODO: Llamar recursivamente a la función para ambas mitades
    const  leftMax  =  /* llamada recursiva */ ;
    const  rightMax  =  /* llamada recursiva */ ;

    // TODO: Combinar las soluciones comparando los máximos
    return  /* máximo entre leftMax y rightMax */ ;
}
// Ejemplo de entrada
const  numbers  =  [ 3 ,  8 ,  2 ,  10 ,  5 ,  7 ] ;
consola . iniciar sesión ( findMax ( números ) ) ;  // Salida esperada: 10