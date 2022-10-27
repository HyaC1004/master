/*
    typescript에서 사용가능한 core type
    number, string, boolean | 지정을 안하면 any라는 특수타입이 됨.
*/
{
    // let userName;
    let userRole: any;
    userRole = "guest";
    userRole = 1;

    let userAge: number;
    userAge = 19;
    // userAge = "nineteen";
    console.log(userAge);

    let isMaster: boolean;
    isMaster = true;
    isMaster = false;
    // isMaster = 1;

}