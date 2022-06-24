/*
    /\\/\\\\\\\\\\\\\\\
   (^  ^ )))))))))))))))
   (     )))))))))))))))
    정규표현식 생성은 이런 형태
    / 패턴.. /플래그(i, g, m, y, u)   

    패턴 정의를 할때 ^: 시작, $: 끝 을 표기할 수 있는데
    
*/
const target1 = "Javascript";
const target2 = "Tavascript";
const target3 = "JAVA";
const target4 = "ECMAscript";
const target5 = "ScriptEngine";

console.log(/^[JjTt]ava/.test(target1)); // 사이에있는거 하나만 맞으면댐
console.log(/^[JjTt]ava/.test(target2));

/*
    /[~]/ : 대괄호 사이에있는거 하나만 맞으면됨 like as or
    /script/i (ignorecase): 대소문자 구분하지않기
    /^script/ : ^~ 로 시작하는지
    /script$/ : ~$ 로 끝나는지 
*/
console.log(/script$/i.test(target1));
console.log(/script$/i.test(target2));
console.log(/script$/i.test(target3));
console.log(/script$/i.test(target4));
console.log(/script$/i.test(target5));