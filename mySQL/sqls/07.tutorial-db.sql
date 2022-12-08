create database tutorial;
use tutorial;


create table sample (
	one datetime,		-- YYYY-MM-DD hh:mm:ss
    other timestamp
);

insert into sample values("1960-12-08 11:00:12", "1960-12-08 11:00:12");
select * from sample;
show warnings;

select curdate(), curtime(), current_timestamp(), now();

create table users(
	email varchar(50) primary key,
	password varchar(50) not null,
	name varchar(10) not null,
	created_at timestamp default now()
);

insert into users(email, password, name) values('master@gmail.com','1q2w3e4r', '마스터');
select * from users;
delete from users;