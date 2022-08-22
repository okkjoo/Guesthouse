-- 删除数据库
drop database zzz;

-- 创建数据库
CREATE DATABASE zzz;

-- 创建表
use zzz;
CREATE TABLE user(
-- auto_increment 表示自增属性，一般情况下不用自己插入id
  id int(10) not null auto_increment,
  name varchar(20) not null default 'ZZZ!' comment '用户名',
  pwd varchar(50) not null comment '密码',
  primary key(id)
)engine=InnoDB charset=utf8;

-- 查看表
show tables;

-- 查看表结构
desc user;

-- 删除表
drop table user;

-- 插入表数据
-- 不表明插入哪些字段时，就要按照创建表时顺序全部填满
INSERT INTO user VALUES(001,'user0','0000');
-- 指定则不用
INSERT INTO user(name,pwd) VALUES('user1','0000');

-- 查询表数据
SELECT * FROM user; -- * 表示查询表中全部
SELECT id,name FROM user; -- 显示选中部分
SELECT id,name FROM user WHERE id = 1; -- 对结果筛选

-- 修改表数据
UPDATE user set pwd = '123456'  WHERE id = 1;

-- 删除表数据
DELETE FROM user WHERE name = 'user1';

