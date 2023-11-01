function contarOvejas(ovejas) {
  ovejas = ovejas.filter(oveja => oveja.color === 'rojo');
  ovejas = ovejas.filter(oveja => oveja.name.includes("a") || oveja.name.includes("A"));
  ovejas = ovejas.filter(oveja => oveja.name.includes("n") || oveja.name.includes("N"));

  // console.log(ovejas);
  return ovejas;
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]

contarOvejas(ovejas);