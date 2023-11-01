function getGiftsToRefill(a1, a2, a3) {
    let answer = [];

    a1.forEach(gift => {
        if(a2.indexOf(gift) == -1 && a3.indexOf(gift) == -1 && answer.indexOf(gift) == -1) {
            answer.push(gift);
        }
    });

    a2.forEach(gift => {
        if(a1.indexOf(gift) == -1 && a3.indexOf(gift) == -1 && answer.indexOf(gift) == -1) {
            answer.push(gift);
        }
    });

    a3.forEach(gift => {
        if(a1.indexOf(gift) == -1 && a2.indexOf(gift) == -1 && answer.indexOf(gift) == -1) {
            answer.push(gift);
        }
    });

    return answer;
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
console.log(gifts);