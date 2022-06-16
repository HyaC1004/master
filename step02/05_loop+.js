/*
    누적 사용금액에 따른 vip 등급제를 운영하는 서비스에
    신규고객이 가입과 동시에 x = 273,000을 사용하였습니다.
    이 사용자의 등급은?
    VIP 등급은 0부터 10이 되기까지는 10,000 포인트마다 상승
    10~20 50,000 포인트마다 상승
    Maximum은 20이다.    

    등급상승이 가능한 동안에
    사용금에서 상승에 필요한 포인트를 빼주면서 vip상승
*/
let vip = 0;
let money = 50000;
let possible = true;
let needs = 10000;
let left;

while (money >= needs) {
    vip++;
    money -= needs;
    if(vip < 10) {
        needs = 10000;
    }else if(vip < 20) {
        needs = 50000;
    }else {
        vip=20;
    }
}
/*
while (possible) {
    if (vip < 10 && money >= 10000) {
        money -= 10000;
        vip++;
    } else if (vip < 20 && money >= 50000) {
        money -= 50000;
        vip++;        
    } else{
        possible = false;
    }
}*/
console.log(vip, money);
/*
if (money >= 10000) {
    while (money >= 10000 && vip < 10) {
        money -= 10000;
        vip++;
        left = 10000 - money;
    }
    while (money >= 50000 && vip < 20) {
        money -= 50000;
        vip++;
        left = 50000 - money;
    }
} else {
    left = 10000 - money;
}
console.log(`VIP 등급은 ${vip} 등급입니다. 다음 등급까지 ${left}원 남았습니다.`);
*/
