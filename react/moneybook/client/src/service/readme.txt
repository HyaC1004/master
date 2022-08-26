Login component ==>
    #action email, password [submit-event] ==>
        1. AccountAPI.auth(email, password) >> NERWORK >> JSON
        2. result: true (token:____________) >> token 값을 저장 >> App logon state를 변경
            or                               >> navigate 훅 사용해서 다른 경로로 변경
           result: false >> 에러메시지 출력 
======================================================================
    접근 #1 login 에 props로 api 객체와 app의 logon state를 변경할수 있는
            function을 만들어서 전달 
    접근 #2 로그인 발생할때 해야될 일들을 App에 function으로 만들어서
            function 전달

mount 될때 로컬참조해서 토큰 있으면? state설정?
    ==> fetch로 유효한 토큰인지 확인 받아서 state설정