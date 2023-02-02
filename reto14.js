// const getOptimalPath = path => {
//     const getOptimalPathRecursive = (row, column) => {
//         if (row === path.length - 1) {
//             return path[row][column];
//         }
//         const left = getOptimalPathRecursive(row + 1, column);
//         const right = getOptimalPathRecursive(row + 1, column + 1);
//         return path[row][column] + Math.min(left, right);
//     };
//     return getOptimalPathRecursive(0, 0);
// };

// ? Opcion B
// const getOptimalPath = path => {
//     const pathCopy = path.map(row => row.slice());
//     for (let i = pathCopy.length - 2; i >= 0; i--) {
//         for (let j = 0; j <= i; j++) {
//             pathCopy[i][j] += Math.min(pathCopy[i + 1][j], pathCopy[i + 1][j + 1]);
//         }
//     }
//     return pathCopy[0][0];
// };

// ! Opcion C
const getOptimalPath = path => {
    return path.reduceRight((previous, current) => {
        return current.map((val, index) => {
            return val + Math.min(previous[index], previous[index + 1]);
        });
    })[0];
};

const result1 = getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2
console.log(result1);

const result2 = getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1
console.log(result2);

const result3 = getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1
console.log(result3);