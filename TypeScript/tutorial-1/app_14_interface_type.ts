/*
    interface 혹은 type 키워드로 사용자 정의 타입을 설계할수 있다.
    type은 확장성이 interface에 비해 떨어진다.
*/
{
    type ErrorMessage = {
        code: number;
        message: string;
    };
    // intersection
    type ErrorMessagePlus = {invoked:Date} & ErrorMessage;


    let err:ErrorMessage = {code:500, message:"Internal error"}
    let _err:ErrorMessagePlus={
        code:500, 
        message:"Internal error",
        invoked:new Date()
    }
    // string & number => never
    type Chaos = {id:string; name:string } & {name:number}
    // let d: Chaos = {id:"xxx"};
}
//=================================================
{
    interface ErrorMessage {
        code: number;
        message: string;
    };
    interface LoggedErrorMessage extends ErrorMessage {
        invoked: Date;
    }
    let err:ErrorMessage = {code:500, message:"Internal error"};
    let _err:LoggedErrorMessage={
        code:500, 
        message:"Internal error",
        invoked:new Date()
    }

}