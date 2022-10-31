/*
   typescript 는 overload 를 지원한다.
    - 과적 / 같은이름의 함수 혹은 생성자 를 여러개 정의내리는 걸 오버로드
*/
/*
    typescript가 제공하는 Generic 이라는 개념에 대해 알아보자.
    데이터타입을 선언할때 지정할 수 있게 해둔 것.
    형태는 <>
*/
{
  let array: Array<string> = [];
  // array.forEach((e)=> e.);

  // 제너릭이라는건 여러형태로 쓰일수 있다.
  function echoValue<T>(val: T): T {
    return val;
  }
  echoValue<string>("aa");
  interface Box<L, R> {
    left: L;
    right: R;
  }
  let x: Box<number, string> = { left: 3, right: "ss" };

  async function sendReq(): Promise<string> {
    if (Math.random() > 0.5) {
      return "success";
    } else {
      return "fail";
    }
  }
  //==============================================================
  sendReq().then((data) => {
    console.log(data.toUpperCase());
  });
  type Article = { title: string; content: string };
  async function getAllArticles(): Promise<Article[]> {
    return [
      { title: "XX", content: "XXXXXX" },
      { title: "YYYY", content: "YYYYYYY" },
    ];
  }

  getAllArticles().then((datas) => {
    datas.map((one) => `<div>${one.title}</div>`);
  });
}
