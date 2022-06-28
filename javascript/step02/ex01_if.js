const read = require("readline-sync");
console.log("Choose your drink!")
let select = read.keyInSelect(["Coke", "Coffee(SO)", "Juice"]);

if (select === 1 || select === -1) {
    if(select === 1) {
        console.log("Sold out! Sorry ;-;");
    } else {
        console.log("Goodbye :)");
    }
} else {
    console.log("Take it. Thx for using :D");  
}
