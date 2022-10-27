{
    /*
        tuple : 타입과 개수가 정해진 배열
    */
    let tp: [number, string, string];
    // t1 = ["aa", 1, 1, 2];
    tp = [1, "guest", "손님"];
    // tp[0] = true;
    // tp[3] = "333";
    console.log(tp);

    /*
        enum : 열거형
    */
    enum SortType {
        ASC = -1, 
        DEFAULT, 
        DESC
    }
    
    function combineNumber(order: SortType, ...data: number[]) {
        if(order === SortType.ASC) {
            return data.sort();
        }else if(order === SortType.DESC) {
            return data.sort().reverse();
        }else{
            return data;
        }
    }
    const result = combineNumber(SortType.ASC, 43, 11, 4535, 56, 67);
    console.log(SortType);
}