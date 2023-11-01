function fitsInOneBox(boxes) {
    let answer = true;
    boxes.sort((a, b) => a.l - b.l); // sort boxes

    // check
    for(let i = 1 ; i < boxes.length ; i++) {
        if(boxes[i].l <= boxes[i - 1].l) {
            return false;
        }

        if(boxes[i].w <= boxes[i - 1].w) {
            return false;
        }

        if(boxes[i].h <= boxes[i - 1].h) {
            return false;
        }
    }

    return answer;
}

const boxes_1 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
];

const boxes_2 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
];

const boxes_3 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
];

console.log(fitsInOneBox(boxes_1)); // true
console.log(fitsInOneBox(boxes_2)); // false
console.log(fitsInOneBox(boxes_3)); // true