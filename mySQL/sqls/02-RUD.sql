/*
	Read : 
    select 컬럼명 from 테이블명 
    Players.find({}, {name:1, backno:1});
*/
select name, backno as bn from players;
select * from players;
-- 조건  _____________ + where 조건  / U, D 작업에도 같은 형태로 조건 설정함.`
select * from players where code=11;
/*
	예를 들어 데이터 삭제명령문은
    delete from 테이블명 (조건)
*/
delete from players where code=11;
/*
	데이터 수정 명령어는
    update 테이블명 set 필드=새로운값, 필드=새로운값 where 조건
*/
select * from players where code=11;

update players set height=187, money=3600 where code=11;

set @@sql_safe_updates = 0;	 -- mysql 설정용 환경변수 

update players set money = money + 300 where position="투수";
/*
	commit, rollback 이라는 DCL 에 대해서 언급해보면,
*/
commit;
rollback;



