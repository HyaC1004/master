{
    /*
        항상 타입을 일일이 지정하지 않아도 유추가 가능하면 알아서
        타입 추론을 해준다.
    */
    let kill:number = 7;
    let death = 2;
    // typescript의 배열은 타입과 함께 지정을 해줘야 한다.

    let arr: string[];
    let brr: number[];
    // arr=["감혜빈", "공병구", 3];
   
    let crr: any[];
    crr = ["totoro", 3, true];
    
    // 타입을 설정했을때의 장점
    // 변수에 담겨있는 데이터의 종류를 제한했기에
    // (그외의 타입은 컴파일 오류가 발생할테니)
    // 해당 타입으로 사용가능한 function이나 property를 접근하는 코드를 짤 수 있게 됨.
    function chaos(arr: string[]) {
        arr.map( (s)=> s.toUpperCase());
    }
}