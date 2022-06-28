/*
    프로토타입 : 만들어질 객체에 함수를 추가    
    프로토타입은 만들고자하는 객체의 기본형을 만들수있다.
*/
let obj = new Object();
//console.log(obj.prototype);

function Time(hour, minute) {
    this.hour = hour;
    this.minute = minute;
    this.init = function () {
        this.hour = 0;
        this.minute = 0;
    }
}
//console.log(Time.prototype);
Time.prototype.type = "HH:mm";
Time.prototype.elapse = function (min) {
    this.minute += min;
    if (this.minute >= 60) {
        this.minute -= 60;
        this.hour++;
        if (this.hour >= 24) {
            this.hour -= 24;
        }
    }
}
// static function
Time.isNight = function(hour) {
    if(hour >= 22 && hour <= 4) {
        return true;
    }else {
        return false;
    }
}
//console.log(Time.prototype);
let t1 = new Time(23, 57);
let t2 = new Time(14, 1);
console.log(t1.type, t1.hour);
console.log(t2.type, t2.hour);
t1.elapse(70);
//console.log(t1.isNight(3)); //만들어진 객체를 통해서 사용하는건 안되고
console.log(Time.isNight(3)); // 바로 사용해야한다.
t2.init();
console.log(t1);
console.log(t1.elapse === t2.elapse); // 프로토타입으로 넣은 함수 true
console.log(t1.isNight === t2.isNight);
console.log(t1.init === t2.init); // Time함수 안에 넣은 함수 false

t1.hour += 2;
t1.type = "KK:mm";
console.log(t1.type, t1.hour);
console.log(t2.type, t2.hour);

