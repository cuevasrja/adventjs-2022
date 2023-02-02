function distributeGifts(packOfGifts, reindeers) {
  const giftsWeight = packOfGifts.map(gift => gift.length).reduce((acc, cur) => {return acc + cur}, 0);
  const reindeersWeight = reindeers.map(reindeer => reindeer.length*2).reduce((acc, cur) => {return acc + cur}, 0);
  return Math.floor(reindeersWeight / giftsWeight)
}

// ! Opcion B
/* 
* const distributeGifts = (packOfGifts, reindeers) => {
*  return Math.floor((reindeers.join``.length * 2) / packOfGifts.join``.length);
* };
*/

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers) // 2