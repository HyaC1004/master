/*
	하나의 테이블이 아닌 관련성 있는 여러개의 테이블을 조합해서 데이터 추출하기
    
    RDB는 목적별로 테이블을 따로 설계해서 관계를 맺어서 사용하는데
    이 관계가 1:1 / 1:다 / 다:다  의 형태로 분류할 수 있다.
    1:1 - 회원기본정보 + 회원상세정보  
    1:다 - 글 + 댓글 / 상품 + 주문내역
    다:다 - 웹툰 정보 + 작가 정보 (웹툰 하나에 작가가 여려명, 한작가 다작을 하는)
    join
*/
desc players;

alter table players drop column entry;

/*
	1:1 용으로 경기출장수 현재 entry 정보를 추가테이블로 관리
*/
drop table player_records;
create table player_records (
	player_no int not null unique,
    games int default 0,
    entry int not null
);

set @@sql_safe_updates=0;

insert into player_records(player_no, games, entry) values(3000, 6145, 9);
delete from player_records;
select * from players;
select * from player_records;

select * from 
		players right  join player_records
        on players.code = player_records.player_no;

select * from
	player_records left  join players
        on players.code = player_records.player_no;
       
-- cross join
select * from
	player_records cross join players
        on players.code = player_records.player_no;
        


select p.*, r.games 
		from players p join player_records r 
        on p.money = r.player_no;
/*
	join 은 총 4가지가 존재한다. 
    inner join (default)   : 양쪽에 있을때 추출이 됨.
	outer join (left outer / right outer) : 한쪽이 기준이 됨.	
*/
        








