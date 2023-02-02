function dryNumber(dry, numbers) {
    return Array.from({ length: numbers }, (_, index) => index + 1).filter(number => {
        return number.toString().includes(dry);
    });
}

const result1 = dryNumber(1, 15) 
console.log(result1);
// [1, 10, 11, 12, 13, 14, 15]

// no tenemos tinta para el dígito 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15

const result2 = dryNumber(2, 20) 
console.log(result2);
// [2, 12, 20]

// no tenemos tinta para el dígito 2
// tenemos que imprimir 20 códigos de barras del 1 al 20
// los códigos de barras que saldrán mal por falta de tinta son:
// 2, 12, 20