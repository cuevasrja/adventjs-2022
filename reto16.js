function fixLetter(letter) {
    return letter
      .replace(/(^\s+)|(\s+$)/g, '')
      .replace(/([.,!])(.*)/g, '$1 $2')
      .replace(/([.,?!\s])(?=\1)/g, '')
      .replace(/\s+([.,?!])/g, '$1')
      .replace(/santa claus/gi, 'Santa Claus')
      .replace(/\b([.?!] \w)|(^\w)/g, match => match.toUpperCase())
      .replace(/^.*\w$/, match => `${match}.`);
}

const result1 = fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.
console.log(result1);

const result2 = fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
console.log(result2);