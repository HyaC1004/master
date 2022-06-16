/*  
 */
const boxA = [1, 2, 3];
const boxB = [11, 12, 13, 14];
const boxes = [boxA, boxB];

for (let key in boxes) {
    console.log(key, boxes[key]);
}
console.log(boxes[0] === boxA);
console.log(boxes[0][0] === boxA[0]);
for (let idx = 0; idx < boxes.length; idx++) {
    console.log(boxes[idx], boxes[idx] instanceof Array);
    let one = boxes[idx];
    for (let subIdx = 0; subIdx<one.length;subIdx++) {
        console.log(one[subIdx]);
    }
    /*
    for (let subIdx = 0; subIdx < boxes[idx].length; subIdx++) {
        console.log(boxes[idx][subIdx]);
    }
    */
}
