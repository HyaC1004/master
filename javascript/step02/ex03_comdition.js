const read = require("readline-sync");
console.log("=======================");
console.log("=       ======        =");
console.log("=      =       =      =");
console.log("=     =    |    =     =");
console.log("=     =    |    =     =");
console.log("=      =       =      =");
console.log("=        =====        =");
console.log("=======================");
let coin = read.question("Insert coin : ");
console.log("=======================");
console.log("=    ----             =");
console.log("=  |      |           =");
console.log("=  | coke |           =");
console.log("=   \\____/            =");
console.log("=    Cola     Juice   =");
console.log("=======================");

let menu = read.keyInSelect(["Cola(800won)", "Juice(700won)-SoldOut"]);

switch (menu) {
    case -1:
        console.log("You canceled. But I won't return money to u thx:)");
        break;
    case 0:
        if (coin >= 800) {
            console.log(`Here is cola and change ${coin - 800}won. Thx.`)
        } else {
            console.log("Not enough money!");
        }
        break;
    case 1:
        if (coin >= 700) {
            console.log("Sorry. Juice is sold-out..");
            console.log(`I'll return your money ${coin}won.`);
        } else {
            console.log("Not enough money!");
        }
}
