이번 주 목표 : 
    - session을 사용한 인증
    - multer middleware를 이용한 파일 업로드 구현
    - fetch를 이용한 비동기 데이터 통신



회원가입 : GET /signup      POST /signup    (/account 라우터에서 처리)
{id, pass, email, name, contact, birth(year, month , day)}

로그인 인증 :  GET /signin      POST /signin    (/account 라우터에서 처리)
    {id, pass}  ==> POST일때 유효한 사용자일때는 인증처리

마이 페이지 : /user (/user 라우터에서 처리)
    - ??

/user 라우터는 인증받은 사용자만 올수있게 라우터에 미들웨어 설정

+@ DB작업을 위한 데이터 모듈을 작성
