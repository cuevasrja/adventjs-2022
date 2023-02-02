function wrapping(gifts) {
  return gifts.map(gift => {
    const length = gift.length;
    return `${'*'.repeat(length+2)}\n*${gift}*\n${'*'.repeat(length+2)}`
  })
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)