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

# server
    /api/history (GET)
        query: month  ===> 특정달로 등록된 데이터만 추출해서 응답하게 됨
    /api/history/write (POST)
        body: {datas}
            ===> 토큰에있는 이메일 값을 account로 추가해서 데이터 등록후 등록된 문서값 응답
# client
    HistoryAPI
        write(datas)
            /api/history/write로 요청보내서 응답을 받아오는
        history(month)
            /api/history 로 요청보내서 응답을 받아옴
해야될 일#
    1. History component 가 마운트 될때 HistoryAPI의 history를 사용해서
        받아온 응답값으로 목록을 만들게
        (유기동물 동물목록 만드는거)

    