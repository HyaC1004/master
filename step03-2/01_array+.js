const ar = ["Apple", "Banana", "Cherry"];

for(let key in ar) {
    console.log(key+"/"+typeof key);
    // 자동으로 넘버링이된다.
}
ar.x="X"
console.log(ar.x);
console.log("length" in ar);
console.log(ar["0"]);
console.log(ar[0]);
let idx = 2;
console.log(ar[""+idx]);
console.log(ar[idx]);

let arr = [];
console.log(arr[0]);
arr[4567]="랜덤게임";
console.log(arr[4567]);
