function contains(store, product) {
  let ans = false;
  const contenido = Object.values(store);

  for(let i = 0 ; i < contenido.length ; i++) {
    if(typeof contenido[i] === 'string') {
      if(product === contenido[i]) {
        return true;
      }
    } else {
      ans = contains(contenido[i], product);
    }
  }

  return ans;
}

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

contains(almacen, 'camiseta'); // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy'); // false