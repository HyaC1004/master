/*
	select, update, delete 시 적용시킬 데이터를
    where 절을 이용해서 필터링할 수 있다.
    =, !=, >, >=, <, <= ,  ( and , or, not )
*/
-- position 인 투수인 데이터만..
select * from players where position ='투수';
-- money 가 50000 이상인 데이터만..
select * from players where money >= 50000;
-- entry 가 1이고 좌투좌타인 데이터만
select * from players where entry =1 and hittype = "좌투좌타";
-- 고등학교가 광주일고 혹은 광주제일고 
select * from players where high='광주일고' or high='광주제일고';

-- 대학교가 null 인 데이터 | cf 널 은 = , != 로 안되고 is null , is not null
select * from players where extra is null;

-- like 는 특정 문자열 패턴인 데이터를 찾고자 할때 사용 %, _ 로 조합
select * from players where name like '%범';	-- '고%', '%범%'
select * from players where elementary like '___초';	

-- in 은 여러개중에 하나인 데이터를 찾고자 할때
select * from players where high in ("광주제일고", '광주일고');

-- between ... 사이
select * from players where money between 15000 and 45000 and position='외야수';

-- 중첩 쿼리 / 서브쿼리
-- 이의리 와 고등학교 동문인 데이터들
select high from players where name='이의리';
select * from players where high = (select high from players where name='이의리');
-- select * from players where high = (select high from players where position='투수');
-- 나지완 이라는 이름의 선수보다 프로데뷔가 더 빠른 선수들 명단
select name, indate from players where indate < (select indate from players where name='나지완') and indate != 0;


-- 추출된 데이터를 sorting 도 할 수 있다. order by  ___  (asc 오름차순 ㄱ->ㅎ | desc 내림차순 ㅎ->ㄱ)
select * from players order by name ;
select * from players order by money desc;
select name, money from players order by money desc, name ;

select * from players where entry=1  order by name;










desc players;








