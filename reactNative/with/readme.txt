0921
1. 회원가입을 마무리 짓자!
    - 현재 TextInput 창의 데이터를 전송하고 있지는 않다.
    state를 활용해서 사용자가 입력한 값들을 모아둔 후 
    버튼이 눌렸을때 사용자의 입력값의 유효성을 체크하여 요청을 보내게 변경하자
    (email 정보는 email정규식, password는 6글자 이상, 비밀번호 재확인에 입력한 값이랑 일치할때만)

2. 로그인을 구현하자!
    - util / Account에 회원인증을 처리해주는 endpoint로 요청을 전송하는
    function을 구현해서

    - loginScreen 에서 사용자가 로그인을 요청했을때 서버와 통신하여
    결과를 얻어오는 것까지만 구현을 하면 됨 (토큰 처리는 아직)

0922 
인증유지

로그인 인증을 성공했을떄
    - ctx에 업데이트를 시키고 있는데
    + async storage 를 이용해서 여기에 auth값을 저장

    + app-context.js의 프로바이더 컴포넌트
    useEffect로 최초 마운트 될때
    async storage에 저장된 토큰이 있다면, 그걸로 ctx auth값 업데이트

0923
[firebase RealTime DB]
https://with-c5480-default-rtdb.asia-southeast1.firebasedatabase.app/

데이터 생성하고 싶을때 (POST)
    엔드포인트: https://with-c5480-default-rtdb.asia-southeast1.firebasedatabase.app/{컬렉션이름}.json?auth={idToken}

데이터 가져오고 싶을때 (GET)
    엔드포인트: https://with-c5480-default-rtdb.asia-southeast1.firebasedatabase.app/{컬렉션이름}.json

특정id 하나가져오고 싶을때 (GET)
    엔드포인트: https://with-c5480-default-rtdb.asia-southeast1.firebasedatabase.app/{컬렉션이름}/{name}.json

특정데이터 수정하고 싶을때 (PUT / PATCH)
    엔드포인트: https://with-c5480-default-rtdb.asia-southeast1.firebasedatabase.app/{컬렉션이름}/{name}.json?auth={idToken}

특정데이터 삭제 (DELETE)
    엔드포인트: https://with-c5480-default-rtdb.asia-southeast1.firebasedatabase.app/{컬렉션이름}/{name}.json?auth={idToken}
