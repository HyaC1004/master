{
    // return 이 결코 되지않는 함수 never
    function invoke(message) {
        if (message.length === 0) {
            throw { message: message, time: new Date() };
        }
        else {
            return message;
        }
    }
    // invoke("error ");
    // ======================================================
    function testA(str) {
        return str.length;
    }
    function testB(str1, str2) {
        return str1.length + str2.length;
    }
    var swing = void 0;
    swing = testB;
    // swing("111");
    var fix = void 0;
    // fix = testB;
    function addListener(evt, cb) { }
    ;
    function optionalFunc(n, flag) {
        console.log(flag);
        if (flag === undefined || flag === false) {
            return -n;
        }
        else {
            return n;
        }
    }
    optionalFunc(3);
    //==========================
    var xz = // any랑 비슷하게 돌아감.
     void 0; // any랑 비슷하게 돌아감.
    xz = 4;
}
