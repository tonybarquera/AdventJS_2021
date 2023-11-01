function wrapping(gifts) {
    let answer = gifts.map(gift => {
      let base = "**";
      for(let i = 0 ; i < gift.length ; i++) {
        base += "*";
      }
  
      return `${base}\n*${gift}*\n${base}`;
    });
  
    return answer;
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
