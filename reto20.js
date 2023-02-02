function howManyReindeers(reindeerTypes, gifts) {
  const copy = reindeerTypes.map(reindeerType => (reindeerType));

  const distributeReindeers = weight => {
    const allowTypes = copy.filter(({ weightCapacity }) => weightCapacity < weight);

    let totalWCap = allowTypes.reduce(
      (capacity, { weightCapacity }) => capacity + weightCapacity,
      0
    );

    return allowTypes.map(({ weightCapacity, type }) => {
      const reindeersNumber = Math.floor(weight / totalWCap);

      weight -= reindeersNumber * weightCapacity;
      totalWCap -= weightCapacity;

      return {
        type,
        num: reindeersNumber
      };
    });
  };

  copy.sort((reindeerA, reindeerB) => {
    return reindeerB.weightCapacity - reindeerA.weightCapacity;
  });

  return gifts.map(({ country, weight }) => ({
    country,
    reindeers: distributeReindeers(weight)
  }));
}

const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

const result1 = howManyReindeers(reindeerTypes, gifts);
console.log(result1);
console.table(result1)
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]