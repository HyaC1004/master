{
    // return 이 결코 되지않는 함수 never
    function invoke(message: string):string| never{
        if(message.length === 0){
            throw {message: message, time: new Date()};
        }else{
            return message;
        }
    }
    // invoke("error ");
    // ======================================================

    function testA(str: string) {
        return str.length;
    }
    function testB(str1: string, str2: string) {
        return str1.length+str2.length;
    }

    let swing: Function;
    swing = testB;
    // swing("111");
    
    let fix: (s:string) => number;
    // fix = testB;

    function addListener(evt: string, cb:() => number):void {};

    function optionalFunc(n: number, flag?: boolean):number {
        console.log(flag);
        if(flag === undefined || flag === false){
            return -n;
        }else{
            return n;
        }
    }
    optionalFunc(3);
    //==========================

    let xz: unknown; // any랑 비슷하게 돌아감.
    xz = 4;
}