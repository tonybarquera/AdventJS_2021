function listGifts(letter) {
  let gifts = letter.split(' ');
  gifts = gifts.filter(gift => gift.charAt(0) !== '_' && gift !== '');

  let regalos = {};
  
  gifts.forEach(gift => {
    regalos[gift] === undefined ? regalos[gift] = 1 : regalos[gift] + 1; 
  });

  // console.log(regalos);
  return regalos;
}

const carta = 'bici coche balón _playstation bici coche peluche'

listGifts(carta);