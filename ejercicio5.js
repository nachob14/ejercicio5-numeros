/*
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/

let alturaEnCentimetros = 177;

let alturaEnMetros = 1.77;

let pesoEnKg = 78.5;

let alturaRedondeada = alturaEnMetros.toFixed(1); // Deberia mostrar 1.8 metros
console.log(alturaRedondeada);

let pesoRedondeado = Math.floor(pesoEnKg); // Deberia mostrar 78 kilogramos
console.log(pesoRedondeado);

let maximoValor = Number.MAX_VALUE;
console.log(maximoValor);

let maximoValorMasUno = Number.MAX_VALUE + 1;
console.log(maximoValorMasUno);

let comparacionMaximosValores = (maximoValor === maximoValorMasUno);
console.log(comparacionMaximosValores);


