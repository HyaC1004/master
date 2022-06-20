/*
    배열의 고차함수(= 함수를 매개변수로 전달받는 함수)
*/
// sort
const nums = [3, 54, 123, 45, 6];

function compare(a, b) {
    return a - b;
}
// 아래 3개가 다같음
nums.sort((a, b) => a - b);
nums.sort(compare);
nums.sort(function (a, b) {
    console.log(a, b);
    //return a===b ? 0 : (a>b ? 1 : -1) ;
    return a > b ? 1 : -1;
});
console.log(nums);
//===================================================
const products = [{
        id: 3,
        name: "Cola",
        price: 1200
    },
    {
        id: 1,
        name: "Juice",
        price: 800
    },
    {
        id: 17,
        name: "Tea",
        price: 300
    }
];
products.sort(function(a,b) {
    return a.price-b.price;
});
console.log(products);
products.sort((a,b) => a.id-b.id);
products.sort((a,b) => a.name.localeCompare(b.name));  // 문자열비교
console.log(products);

