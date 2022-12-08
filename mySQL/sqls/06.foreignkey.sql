-- 외래키 설정 : foreign key 
create table comments (
	no int auto_increment,
    target int,	-- 플레이어코드
    body varchar(300),
    
    primary key(no),
	foreign key(target) references players(code)
);

insert into comments values(null, 17, "항상 열심히 하는 모습 보기 좋아요");
insert into comments values(0, 47, "화이팅!!");
insert into comments values(0, 97, "....내년에는 좀더 활약하자");
select * from comments;

select * from players join comments on players.code = comments.target
	where players.name = "임기영";

select target, count(*) from comments group by target;
/*
	투수 정보를 불러오는데 댓글 수를 조인해서 
*/
select players.code , players.name, players.position, ifnull(cnt, 0) as cnt from players 
	left join (select target, count(*) as cnt from comments group by target) tmp
    on players.code = tmp.target
where position="투수";






