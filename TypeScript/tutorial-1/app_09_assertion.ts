/*
    매개변수로 배열을 처리하려고 하는데
*/
{
function createArray(): any {
    return [1,2,3,4,5];
}

let ret = createArray();
(ret as number[]).indexOf(3);
(<number>ret).toFixed(2);
}