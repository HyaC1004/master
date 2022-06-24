// getTime을 응용해서
const times = [];
    times.push(new Date());
    times.push(new Date("1993-11-24"));
    times.push(new Date("1981-04-17"));
    times.push(new Date("1996-10-09"));
let sortTime = times.sort(function(a,b){
    return a.getTime()-b.getTime();
});
console.log(sortTime);
