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

=============== 글쓰기 ===============
/article
    /home [GET]
        ===> 위에는 글쓰기 폼/ 아래쪽에는 최신 목록 함께 출력

글쓰기 폼의 요구사항
    1. 공개 비공개를 선택 / radio나 checkbox
    2. 글을 쓸수 있는 공간이 있어야 한다.(textarea)
    3. 이미지를 첨부할 수 있어야 한다. (input type="file")
                        form enctype = "multipart/form-data"
    4. 여러개가 선택될수도 있다. (input multiple) ==> multer.array
        / 한개짜리 업로드로 구현해도 무방 multer.single
    
    ===> 이 submit을 받을 라우트는 /article /upload
        (업로드 처리할것 하고 /article/home 리다이렉트)
    + 업로드 전에 미리보기 구현해도 좋을 듯 멀티일 때는 files 배열

몽고디비 컬렉션 articles를 사용할꺼고
문서형태는 { "writerId" : / "writerName" : / "writerImage": / "post" : / "createdAt" : /
            "attaches" : / "comment" : []  }
    만약 멀티플 업로드를 했다면 attaches는 배열이 될꺼임

/article /home 목록 출력을 해줄 때는....
comments.length를 출력

/article /view query로 넘어온 articlId에 해당하는 문서 상세보기를 만들면 된다.
    /article /home에서 개별 아티클마다 <a href="/article/view?articleId=<%=elm._id.toString()"%>

데이터를 화면에 뿌려줄때, 필터링이 필요함
    type == "public" 이거나 혹은
    type == "private" and writerId == req.session.user.id