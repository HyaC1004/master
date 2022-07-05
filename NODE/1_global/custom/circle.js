const circle = {
    radius:0,
    setRadius: function(r) {
        this.radius =r;
    },
    getArea: function() {
        return this.radius**this.radius*Math.PI;
    }
};
console.log(module.exports);    // 다른데서 require에 의해 불러들여졌을 때 사용될 객체 값

module.exports = circle;
// exports = circle;    안댐 
/*
    exports ===> module.exports ====> {   }
    
    let one = {};
    let two = one;

    one.name = "";
    two.name = "";   같은 효과

    one = {};   
    two = {};   다른 결과   
*/


