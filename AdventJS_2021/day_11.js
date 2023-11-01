function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!

  const normal = 12 * times;
  let tarjeta = 250;

  for(let i = 1 ; i <= times ; i++) {
    tarjeta += 12 * Math.pow(.75, i);
  }

  return tarjeta < normal;
}

// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad