// [kill = 상대방을 죽인 회수, Death=자기가 죽은 회수, Assist=...]
const score = [
    [10, 5, 1],
    [2, 12, 4],
    [5, 5, 5],
    [12, 3, 6],
    [6, 13, 1]
];
//=========================================
// t배열보다 뒤쪽에 있는 배열 중에 KILL 값이 더 낮은 배열이 있는지
let target = 3; // 가변
let check = false;
for (let i = target + 1; i < score.length; i++) {
    let targetKill = score[target][0];
    if (score[i][0] < targetKill) {
        check = true;
        break;
    }
}
console.log(check);
//=========================================
// 타겟의 Assist 값 보다 높은 assist 값을 갖고있는 배열잉 있는지
target = 1; //가변
check = false;
for (let i = 0; i < score.length; i++) {
    let targetAssist = score[target][2];
    if (i == target) {
        continue;
    }
    if (score[i][2] > targetAssist) {
        check = true;
        break;
    }
}
//console.log(check);

//=========================================
// kill 의 평균
let killScore = 0;
for (let i = 0; i < score.length; i++) {
    killScore += score[i][0];
}
let killAvg = killScore / score.length;
//console.log(killAvg);
