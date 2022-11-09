# Day 1
    : 프로젝트 설정
        npx create-next-app@latest --typescript
    : 필요한 모듈 설치
        npm install @mui/material @emotion/react @emotion/styled
        npm i mongoose
    : 기본 레이아웃 설정
        회원가입 컴퍼넌트 만들어서 모달로 띄우기
        1. custom document setting

# Day 2
    : 회원가입 구현
        - 이메일 작성 - 비밀번호 입력? Yes - 로그인 - 계정 메뉴에서 계정 활성화 가능
                                     No - 재입력 유도
                     - 회원가입 유도 - 가입 처리 - 기본정보+ 계정상태:잠김
                                    - 약관 동의? { 예 - 계정활성화             
                                                  아니오 / 취소 - 계정잠금 그대로
# Day 3, 4
    : SNS 로그인 구현
        - Discord, Google, Facebook

# Day 5
    : 숙소 등록 절차
        /hosting : 호스트 모드의 웰컴 페이지 (보류)
        /become-a-host: 숙소 등록쪽 웰컴페이지
            - 숙소 등록 완료하기: 
            - 숙소 등록 시작하기: 
        /become-a-host/intro: 숙소 등록 첫 화면
        /become-a-host/property-type-group
        /become-a-host/755958618798513774/property-type
                      /755958618798513774 [roomid]
        /become-a-host/property-type-group/privacy-type

        /pages/become-a-host/index
                            /intro
                            /property-type-group ==> 
                            /[id]/

