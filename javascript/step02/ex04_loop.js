
const read = require("readline-sync");
let input;
// Lv Cut = 등급별 최소 누적 경험치
// My Lv = 현재 레벨
while(input !== -1) {
    input = read.keyInSelect(["Lv Cut", "My Lv"]);
    switch(input) {
        case 0:
            let needLv = read.question("Input Lv: "); 
            let lv;
            let total = 0;
            if(needLv <=0 || needLv >10){
                console.log("invalid value ");
                continue;
            }
            //해당 레벨까지 올라가는 필요한 누적경험치
            for(lv = 1; lv < needLv; lv++) {
                let exp = lv**2 *10000;  //레벨당 필요경험치
                total += exp;                
            }
            console.log(`${needLv}까지 필요한 경험치는 ${total}입니다.`)
            break;
        case 1:
            let yourExp = read.question("Input your Exp: ");   
            let yourLv = 0;
            let exp = 10000; //초기경험치
            let needExp;
            for (yourExp; yourExp>=0; yourExp-=exp) {
                exp = yourLv ** 2 * 10000
                needExp = exp - yourExp;
                yourLv++;
            }          
            /*
                let rst = 1; //사용자레벨
                let needExp; //레벨업에 필요한 비용
                while(yourExp >= needExp) {
                    yourExp -= needExp; //경험치소모;
                    rst++; //렙업
                    needExp = rst**2 *10000;
                }
            */
            console.log(`당신은 LV${yourLv-1}이고, 남은 경험치는 ${needExp}입니다.`);
    }
}