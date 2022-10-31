/*
   typescript 는 overload 를 지원한다.
    - 과적 / 같은이름의 함수 혹은 생성자 를 여러개 정의내리는 걸 오버로드
*/
{
  function add(n: number, n2: number): number;
  function add(n: number, n2: number, flag: boolean): number;
  function add(n: number, n2: number, flag?: boolean): number {
    return 1;
  }

  function combine(one: string, two: string): string;
  function combine(one: string, two: string, three: string): string;
  function combine(one: number, two: number): number;
  function combine(one: string, two: string, three: number): string;
  function combine(
    one: string | number,
    two: string | number,
    three?: string | number
  ): string | number {
    if (typeof one === "number" && typeof two === "number") {
      return one + two;
    } else {
      return one.toString() + "," + two.toString();
    }
  }

  //==========================================
  let ret = combine("aa", "bbb");

  let ret2 = combine(1, 2);

  new Date();
}
