/*
    union type 타입 조합
*/

{
    let data: string | number;

    data = "string";
    data = 32;

    function printData(data:string | string[]) {
        if(Array.isArray(data)){
            console.log(data.join(" "));
        }else{
            console.log(data);
        }        
    }
    printData("정상춘");
    printData(["최윤주","정상춘"]);
    // printData(133);

    /*
        literal type 데이터 자체도 타입으로 설정할수 있다.
    */
    let x: undefined;
    x = undefined;
    let valid: true;
    let _valid: boolean;
    valid = true;
    valid = true;
    valid = true;
    valid = true;
    valid = true;
    // ================================
    let mode: "read" | "create" | "update" | "delete";
    mode = "update";
    let sortType: -1|0|1;

    type direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

    function move(pos:direction) {}
    move("LEFT");
    


}