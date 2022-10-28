{
    // javascript null이라는 타입이 있음.
    function invoke(n:number): string | null {
        if(n>0){
            return n.toString();
        }else{
            return null;
        }
    }

    let result = invoke(5);
    result?.repeat(3);
    console.log(result.repeat(4)); // Non-null Assertion Operator !
}