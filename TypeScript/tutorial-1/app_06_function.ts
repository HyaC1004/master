/*
    function을 정의할때 매개변수의 타입외에
    리턴되는 값의 타입에도 설정이 필요하다.
*/
{
    function add(n1: number, n2: number):number {
        // if(Math.random()>0.5) {
        //     return n1.toString() + n2.toString();
        // }
        return n1+n2;
    }
    
    const abs = (n: number) => {
        return n>0 ? n: -n;
    }

    function log(data:any):void {   // return에 값을 넣을수 없음
        console.log(" ---- ",data);
        // return 1;
    }
    let ret = log("####");
    console.log(ret);

    function optionalFunc(n: number, flag?: boolean):number {
        console.log(flag);
        return n;
    }
    optionalFunc(3,true);
}