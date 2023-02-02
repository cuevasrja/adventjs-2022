function checkJump(heights) {
    const indMax = heights.indexOf(Math.max(...heights));
    const maxInMiddle = ![0, heights.length - 1].includes(indMax);

    const arr1 = heights.slice(0, indMax);
    const up = arr1.slice(1);
    const orderUp = up.every((val, i) => val >= arr1[i]);

    const arr2 = heights.slice(indMax + 1, heights.length);
    const down = arr2.slice(1)
    const orderDown = down.every((val, i) => val <= arr2[i]);

    return orderUp && orderDown && maxInMiddle 
}

/*
? Opcion B
function checkJump(heights) {
    const peakIndex = heights.indexOf(Math.max(...heights));
    const isPeakAtMiddle = ![0, heights.length - 1].includes(peakIndex);

    const leftSide = heights.slice(0, peakIndex);
    const rightSide = heights.slice(peakIndex + 1, heights.length);

    const up = leftSide.slice(1);
    const down = rightSide.slice(1);

    const isUp = up.every((height, index) => height >= leftSide[index]);
    const isDown = down.every((height, index) => height <= rightSide[index]);

    return isPeakAtMiddle && isUp && isDown;
}
 */

const heights1 = [1, 3, 8, 5, 2]
const resultado1 = checkJump(heights1) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights2 = [1, 7, 3, 5]
const resultado2 = checkJump(heights2) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/

const heights3 = [1, 3, 2, 5, 4, 3, 2, 1];
const resultado3 = checkJump(heights3);

const heights4 = [2, 2, 2, 2];
const resultado4 = checkJump(heights4);

console.log(`Resultado 1: ${resultado1}`, `Resultado 2: ${resultado2}`, `Resultado 3: ${checkJump(heights3)}`, `Resultado 4: ${resultado4}`);