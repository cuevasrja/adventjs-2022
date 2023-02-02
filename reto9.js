function countTime(leds) {
    const ledStripsOff = leds.join('').split('1');
    ledStripsOff[0] += ledStripsOff.pop();

    return ledStripsOff.reduce((time, ledStripOff) => {
        return Math.max(time, ledStripOff.length * 7);
    }, 0);
}
/*
? Solucion B
const countTimeMap = leds => {
  const ledStripsOff = leds.join('').split('1');
  ledStripsOff[0] += ledStripsOff.pop();

  return Math.max(...ledStripsOff.map(ledStripOff => ledStripOff.length)) * 7;
};

? Solucion C
const countTimeSort = leds => {
  const ledStripsOff = leds.join('').split('1');
  ledStripsOff[0] += ledStripsOff.pop();

  return ledStripsOff.sort((ledStripOffA, ledStripOffB) => ledStripOffB.length - ledStripOffA.length)[0].length * 7;
};
 */


const leds = [0, 1, 1, 0, 1]
const resultado1 = countTime(leds) // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

const resultado2 = countTime([0, 0, 0, 1]) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

const resultado3 = countTime([0, 0, 1, 0, 0]) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

console.log(resultado1, resultado2, resultado3);