// * Opcion A
// function checkStepNumbers(systemNames, stepNumbers) {
//   return systemNames.every((_, index, systemNamesOriginal) => {
//     return (
//       stepNumbers[index] <= stepNumbers[index + systemNamesOriginal.slice(index + 1).indexOf(systemNames[index]) + 1]
//     );
//   });      
// }

// ? Opcion 2
function checkStepNumbers(systemNames, stepNumbers) {
    return !systemNames.some((_, index, systemNamesOriginal) => {
      return (
        stepNumbers[index] > stepNumbers[index + systemNamesOriginal.slice(index + 1).indexOf(systemNames[index]) + 1]
      );
    });      
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

const result1 = checkStepNumbers(systemNames, stepNumbers) // => true
console.log(result1);
// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]

// true: Los pasos de cada sistema están en orden estrictamente creciente

const result2 = checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) // => false
console.log(result2);
// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]

// false: tree_1 tiene los pasos de forma decreciente