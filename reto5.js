function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let sendedGifts = 0;

    const findMaxPossibleGifts = (numbers, combination) => {
        if (combination.length <= maxCities) {
            const combinationSum = combination.reduce((a, b) => a + b, 0);
            if (combinationSum <= maxGifts && combinationSum > sendedGifts) {
                sendedGifts = combinationSum;
            }
        }

        numbers.forEach((number, index, numbersList) => {
            combination.push(number);
            findMaxPossibleGifts(numbersList.slice(index + 1), combination);
            combination.pop(number);
        });
    };

    findMaxPossibleGifts(giftsCities, []);

    return sendedGifts;
}

// * Opcion B
// function getMaxGifts(giftsCities, maxGifts, maxCities) {
//   return giftsCities
//     .sort((cityGiftsA, cityGiftsB) => cityGiftsB - cityGiftsA)
//     .reduce((m, g) => {
//       if (maxCities !== 0 && m + g <= maxGifts && m + g !== maxGifts - 1) {
//         maxCities -= 1;
//         m += g;
//       }
//       return m;
//     }, 0);
// }

const resultado1 = getMaxGifts([12, 3, 11, 5, 7], 20, 3);
const resultado2 = getMaxGifts([50], 100, 1);
const resultado3 = getMaxGifts([50, 70], 100, 1);
const resultado4 = getMaxGifts([50, 70, 30], 100, 2);
const resultado5 = getMaxGifts([5, 2, 10, 8, 6, 4, 15, 3], 100, 3);

console.log(resultado1, resultado2, resultado3, resultado4, resultado5);