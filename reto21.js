function printTable(gifts) {
  const giftHeader = 'Gift';
  const quantityHeader = 'Quantity';
  const giftHeaderLength = giftHeader.length;
  const quantityHeaderLength = quantityHeader.length;
  
  const [maxGiftLength, maxQuantityLength] = [
    Math.max(giftHeaderLength, ...gifts.map(({ name }) => name.length)),
    Math.max(quantityHeaderLength, ...gifts.map(({ quantity }) => quantity.toString().length))
  ];
  
  const totalTableLength = maxGiftLength + maxQuantityLength + 7;
  
  const topBorder = '+'.repeat(totalTableLength);
  
  const giftHeaderSpace = ' '.repeat(maxGiftLength - giftHeaderLength);
  const quantityHeaderSpace = ' '.repeat(maxQuantityLength - quantityHeaderLength);
  const header = `| ${giftHeader}${giftHeaderSpace} | ${quantityHeader}${quantityHeaderSpace} |`;
  
  const separator = `| ${'-'.repeat(maxGiftLength)} | ${'-'.repeat(maxQuantityLength)} |`;
  
  const body = gifts
    .map(({ name, quantity }) => {
      const giftSpace = ' '.repeat(maxGiftLength - name.length);
      const quantitySpace = ' '.repeat(maxQuantityLength - quantity.toString().length);
      return `| ${name}${giftSpace} | ${quantity}${quantitySpace} |`;
    })
    .join('\n');
  
  const bottomBorder = '*'.repeat(totalTableLength);
  
  return `${topBorder}\n${header}\n${separator}\n${body}\n${bottomBorder}`;
}

const result1 = printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
]);
console.log(result1);