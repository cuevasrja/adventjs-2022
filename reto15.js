// * Opcion A
function decorateTree(base) {
    const options = ["B", "P", "R"]
    const tree = new Array(base.split(" ").length).fill("");
    return tree.reduce((acc, _, ind)=>{
        if (ind === 0){return acc.concat(base)}
        const previousArray = acc[ind-1].split(" ");
        const currentArray = new Array(previousArray.length - 1).fill("")
        return acc.concat(currentArray.map((_, i) =>{
            if (previousArray[i] === previousArray[i+1]){
                return previousArray[i]
            }
            return options.find(val => val !== previousArray[i] && val !== previousArray[i+1])
        }).join(" "))
    }, []).reverse()
}

// ? Opcion B
// function decorateTree(base) {
//     const options = ["B", "P", "R"]
//     const treeLength = base.split(" ").length;
//     const tree = [];
//     for (let i = 0; i < treeLength; i++) {
//         if (i === 0){
//             tree.push(base)
//             continue
//         }
//         const previousArray = tree[i-1].split(" ");
//         const currentArray = []
//         for (let j = 0; j < previousArray.length-1; j++) {
//             if(previousArray[j] === previousArray[j+1]){
//                 currentArray.push(previousArray[j])
//                 continue
//             }
//             const letter = options.find(val => val !== previousArray[j] && val !== previousArray[j+1])
//             currentArray.push(letter)
//         }
//         tree.push(currentArray.join(" "))
//     }
//     return tree.reverse()
// }

// ! Opcion C
// function decorateTree(base) {
//     const ornamentFormula = {
//       BB: 'B',
//       BP: 'R',
//       BR: 'P',
//       PB: 'R',
//       PP: 'P',
//       PR: 'B',
//       RB: 'P',
//       RP: 'B',
//       RR: 'R'
//     };
//     const splittedBase = base.split(' ');
//     const addOrnament = (accumulator, currentValue, currentIndex, original) => {
//       const nextValue = original[currentIndex + 1];
//       if (nextValue !== undefined) {
//         accumulator.push(ornamentFormula[currentValue + nextValue]);
//       }
//       return accumulator;
//     };
//     const createTree = (accumulator, _currentValue, currentIndex) => {
//       const nextLine = accumulator[currentIndex].reduce(addOrnament, []);
//       accumulator.push(nextLine);
//       return accumulator;
//     };
//     return [...Array(splittedBase.length - 1)]
//       .reduce(createTree, [splittedBase])
//       .reverse()
//       .map(ornaments => ornaments.join(' '));
// }

const result1 = decorateTree('B P R P');
console.log(result1);
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

const result2 = decorateTree('B B') // ['B', 'B B']
console.log(result2);

const result3 = decorateTree('B P R P P B R B P');
console.log(result3);