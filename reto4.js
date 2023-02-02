function fitsInOneBox(boxes) {
    const sortedBoxes = boxes.sort((firstBox, secondBox) => {
      return firstBox.l - secondBox.l;
    });
  
    return sortedBoxes.every(({ l: currentBoxL, w: currentBoxW, h: currentBoxH }, index, boxesList) => {
      const { l: previousBoxL, w: previousBoxW, h: previousBoxH } = boxesList[index - 1] || {};
  
      const isFirstBox = index === 0;
      const canCurrentBoxContainPreviousOne =
        currentBoxL > previousBoxL && currentBoxW > previousBoxW && currentBoxH > previousBoxH;
  
      return isFirstBox || canCurrentBoxContainPreviousOne;
    });
}

const resultado = fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true

console.log(resultado);