
const input = document.querySelector("#input");
input!.addEventListener("focus",function(evt){
    input!.classList.add("active");
    const cvt = input as HTMLInputElement;
    console.log(cvt.value);
})

let value: any;
// value = 1;
// (value as string[]).push("pppp");

function createDummy(t:"number" | "array" | "string"): any | null {
    switch(t) {
        case "number":
            return 100;
        case "array":
            return [3, 4, -1];
        case "string":
            "typescript";
    }
    return null;
}
const dummy = createDummy("array");
(dummy! as number[]).push(33);



