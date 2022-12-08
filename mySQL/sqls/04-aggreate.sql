/*
	저장된 데이터를 토대로 통계를 낼 수 있는데 , 그 때 사용되는 구문을 살펴보자.
    count, sum, avg, max, min
*/
select count(name) from players;	-- 데이터 개수 카운팅 null 은 카운트를 안함
select count(*) from players where money >=10000;

select sum(money), avg(money), max(money), min(money) from players;

-- 선수단의 평균 연봉보다 높은 데이터의 개수
select count(*) from players where money >= (select avg(money) from players);

select * from players where money = (select max(money) from players);

/*
	전체 데이터를 기반하여 통계를 내보았는데 그룹화 해서 통계를 낼 수 도 있음.
    group by
*/
select position, entry, count(*) as cnt, avg(money) as avergaeOfMoneoy
					from players group by position, entry;


select position , count(*) as cnt, avg(money) from players 
						where entry = 1 
                        group by position 
                        having cnt >=10
                        order by cnt desc;
                                                
                











