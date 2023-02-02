// * Opcion A
function selectSleigh(distance, sleighs) {
    const usage = sleighs.map(val=> {return {vUsed: val.consumption*distance, ...val}})
    const bestWs = usage.filter(val => val.vUsed <= 20).reverse()
    return bestWs.length > 0? bestWs[0].name : null
}

// ? Opcion B
// function selectSleigh(distance, sleighs) {
//     const usage = sleighs.map(val=>val.consumption*distance).reverse();
//     const sleigh = usage.find(val => val <= 20);
//     const ind = usage.reverse().indexOf(sleigh)
//     return sleighs[ind].name
// }

// !Opcion C
// function selectSleigh(distance, sleighs) {
//     const usage = sleighs.reduce((acc, cur) =>{
//         const res = cur.consumption*distance <= 20? acc.concat(cur.name) : acc
//         return res
//     }, []).reverse(); 
//     return usage.length > 0 ? usage[0] : null
// }

// TODO Opcion D
// const selectSleigh = (distance, sleighs) => {
//   const eligibleSleighs = sleighs.filter(sleigh => {
//     return sleigh.consumption * distance <= 20;
//   });
//   return eligibleSleighs.length > 0 ? eligibleSleighs.at(-1).name : null;
// };

// * Opcion E
// const selectSleigh = (distance, sleighs) => {
//   const eligibleSleighs = sleighs.filter(sleigh => {
//     return sleigh.consumption * distance <= 20;
//   });
//   eligibleSleighs.unshift({ name: null, consumption: Infinity });
//   return eligibleSleighs.at(-1).name;
// };

const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

const result1 = selectSleigh(distance, sleighs) // => "Dancer"
console.log(result1);

// Dasher consume 9W para recorrer 30 de distancia
// Dancer consume 15W para recorrer 30 de distancia
// Rudolph consume 21W para recorrer 30 de distancia
// Midu consume 30W para recorrer 30 de distancia

// El mejor trineo con el que puede recorrer
// la distancia es Dancer.

// Dasher recorre la distancia pero es peor trineo
// Rudolph y Midu no pueden recorrer la distancia con 20W.
const result2 = selectSleigh(50, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
]);
console.log(result2);