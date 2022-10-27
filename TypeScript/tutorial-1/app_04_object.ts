{
    type Numeric = number;
    let luckyNo: Numeric;
    
    type Person = {
        id: string;
        name: string;
        hobby?: Array<string>; // string[]
        gender?: boolean;
    }
    let student = {
        id: "2206001",
        name: "감혜빈",
        hobby: ["공부하기", "운동하기"],
    };

    console.log(student.gender);
    student.age = 19;

    let rival: {
        id: string,
        name: string,
        hobby?: string[],
        gender?: boolean 
    }

    let mate: {
        id: string;
        name: string;
        hobby?: Array<string>; // string[]
        gender?: boolean;
    };

    let boss : Person;

    let tester: object;

    tester = {
        name: "정상춘",
        id: "2206007",
    };
    console.log(tester.name);

}