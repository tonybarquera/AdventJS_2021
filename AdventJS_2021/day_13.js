function wrapGifts(gifts) {
  let ans = [];
  let base = '';

  for(let i = 0 ; i < gifts[0].length + 2 ; i++) { base += '*'; }
  ans.push(base);
  for(let i = 0 ; i < gifts.length ; i++) { ans.push(`*${gifts[i]}*`); }
  ans.push(base);
  
  return ans;
}

wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/