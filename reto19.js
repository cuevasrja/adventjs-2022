// * Opcion A
function sortToys(toys, positions) {
  return toys.sort((toyA, toyB) => {
    return positions[toys.indexOf(toyA)] - positions[toys.indexOf(toyB)];
  });
}

// ? Opcion B
// function sortToys(toys, positions) {
//   const minPosition = Math.min(...positions);
//   return toys.reduce((orderedToys, toy, index) => {
//     orderedToys[positions[index] - minPosition] = toy;
//     return orderedToys;
//   }, []);
// }

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

const result1 = sortToys(toys, positions)
console.log(result1);
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

const result2 = sortToys(moreToys, morePositions)
console.log(result2);
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']