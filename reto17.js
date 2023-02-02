function carryGifts(gifts, maxWeight) {
    const giftsString = gifts.join(' ');
    const regex = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g');
    const bags = giftsString.match(regex);
    return bags || [];
}

const result1 = carryGifts(['game', 'bike', 'book', 'toy'], 10);
console.log(result1);
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

const result2 = carryGifts(['game', 'bike', 'book', 'toy'], 7);
console.log(result2);
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

const result3 = carryGifts(['game', 'bike', 'book', 'toy'], 4);
console.log(result3);
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

const result4 = carryGifts(['toy', 'gamme', 'toy', 'bike'], 6);
console.log(result4);
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro