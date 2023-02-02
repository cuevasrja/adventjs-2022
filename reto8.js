function checkPart(part) {
    console.log(`Palabra revertida: ${part.split("").reverse().join("")}`);
    if (part === part.split("").reverse().join("")){
        console.log(`${part} es un palindromo sin eliminar ningun caracter`);
        return true
    }
    for (let i = 0; i < part.length; i++){
      const word = part.replace(part[i], "");
      console.log(word);
      if (word === word.split("").reverse().join("")) {
        console.log(`${part} es un palindromo eliminando ${part[i]}`);
        return true
      }
    }
    console.log(`${part} no es un palindromo`);
    return false
}

/* 
! Solucion B
*    function checkPart(part) {
*        const middle = part.length / 2;
*        return [...part.slice(0, middle)].every((currentLeftLetter, index) => {
*            const nextLeftLetter = part[index + 1];
*            const currentRightLetter = part[part.length - index - 1];
*            const nextRightLetter = part[part.length - index - 2];
*            return (
*                currentLeftLetter === currentRightLetter ||
*                currentLeftLetter === nextRightLetter ||
*                nextLeftLetter === currentRightLetter
*            );
*        });
*    }
 */

/* 
? Opcion C
const checkPart = part => {
  return [...part].some((_letter, i) => {
    const nextPart = part.substring(0, i) + part.substring(i + 1);
    return nextPart === [...nextPart].reverse().join('');
  });
};
 */

const resultado1 = checkPart("uwu") // true
// "uwu" es un palíndromo sin eliminar ningún carácter

const resultado2 = checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

const resultado3 = checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter

console.log(resultado1, resultado2, resultado3);