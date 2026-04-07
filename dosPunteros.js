const  invitados  =  [ "Ana" ,  "Carlos" ,  "Cecilia" ,  "Daniel" ,  "Diana" ,  "Eduardo" ] ;

function  encontrarPareja ( arr )  {
    let  inicio  =  0 ;
    let  siguiente  =  1 ;

    mientras  ( siguiente  <  arr . longitud )  {
        // TODO: Compara las iniciales de los nombres en los punteros
        // Si coincide, devuelve el par
        // ...

        // TODO: Avanza los punteros si no coinciden
        // ...
    }

    devolver  nulo ;  // Si no se encuentra ningún par
}

consola . log ( encontrarPareja ( invitados ) ) ;
// Resultado: ["Carlos", "Cecilia"]